from flask import Flask, render_template, jsonify, request, redirect, url_for, flash
import sqlite3
import datetime
import threading
import socket
import json
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__, static_folder='static')
app.secret_key = 'tu_clave_secreta_aqui'  # Cambia esto por una clave segura

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

# Variable global para almacenar los datos del sensor
sensor_data = {
    'humidity': 0,
    'temperature': 0,
    'soil_status': '',
    'npk': {'n': 0, 'p': 0, 'k': 0}
}

# Variable global para almacenar el último mensaje UDP recibido
last_udp_message = ""

# IP y puerto del Arduino/ESP32 (configurable)
ARDUINO_IP = "172.20.24.190"  # Cambiar por la IP real de tu ESP32 (ver ipconfig)
ARDUINO_PORT = 5005

# Clase de Usuario
class User(UserMixin):
    def __init__(self, id, username, password_hash):
        self.id = id
        self.username = username
        self.password_hash = password_hash

# Función para inicializar la base de datos
def init_db():
    conn = sqlite3.connect('sensor_data.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS sensor_readings
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  timestamp TEXT,
                  humidity REAL,
                  temperature REAL,
                  soil_status TEXT,
                  n REAL,
                  p REAL,
                  k REAL)''')
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  username TEXT UNIQUE NOT NULL,
                  password_hash TEXT NOT NULL)''')
    c.execute('''CREATE TABLE IF NOT EXISTS areas
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  name TEXT NOT NULL,
                  timestamp TEXT,
                  measurements TEXT)''')  # JSON string with area measurements
    # Agregar columna soil_status si no existe (para bases de datos existentes)
    try:
        c.execute('ALTER TABLE sensor_readings ADD COLUMN soil_status TEXT')
    except sqlite3.OperationalError:
        pass  # La columna ya existe
    conn.commit()
    conn.close()

# Función para guardar datos en la base de datos
def save_sensor_data(humidity, temperature, soil_status, n, p, k):
    conn = sqlite3.connect('sensor_data.db')
    c = conn.cursor()
    timestamp = datetime.datetime.now().isoformat()
    c.execute("INSERT INTO sensor_readings (timestamp, humidity, temperature, soil_status, n, p, k) VALUES (?, ?, ?, ?, ?, ?, ?)",
              (timestamp, humidity, temperature, soil_status, n, p, k))
    conn.commit()
    conn.close()

# Endpoint HTTP para recibir datos del Arduino (mantener para compatibilidad)
@app.route('/api/sensor_data', methods=['POST'])
def receive_sensor_data():
    global last_udp_message  # Cambiar a last_udp_message para consistencia
    try:
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No data provided'}), 400

        # Espera formato: {"humidity": float, "temperature": float, "soil_status": str, "n": float, "p": float, "k": float}
        humidity = data.get('humidity')
        temperature = data.get('temperature')
        soil_status = data.get('soil_status', '')
        n = data.get('n')
        p = data.get('p')
        k = data.get('k')

        if None in [humidity, temperature, n, p, k]:
            return jsonify({'error': 'Missing sensor data fields'}), 400

        sensor_data['humidity'] = float(humidity)
        sensor_data['temperature'] = float(temperature)
        sensor_data['soil_status'] = soil_status
        sensor_data['npk']['n'] = float(n)
        sensor_data['npk']['p'] = float(p)
        sensor_data['npk']['k'] = float(k)

        # Guardar datos en la base de datos
        save_sensor_data(sensor_data['humidity'], sensor_data['temperature'], sensor_data['soil_status'],
                       sensor_data['npk']['n'], sensor_data['npk']['p'], sensor_data['npk']['k'])

        last_udp_message = f"{humidity},{temperature},{soil_status},{n},{p},{k}"
        print(f"Datos HTTP recibidos y actualizados: {sensor_data}")

        return jsonify({'status': 'success', 'message': 'Sensor data received'}), 200
    except Exception as e:
        print(f"Error al procesar datos HTTP: {e}")
        return jsonify({'error': 'Internal server error'}), 500

# Ruta principal para mostrar la página web
@app.route('/')
@login_required
def index():
    return render_template('index.html')

# API para obtener los datos del sensor en formato JSON
@app.route('/api/sensor_data')
def get_sensor_data():
    try:
        conn = sqlite3.connect('sensor_data.db')
        c = conn.cursor()
        # Obtener la lectura más reciente
        c.execute("SELECT humidity, temperature, soil_status, n, p, k FROM sensor_readings ORDER BY id DESC LIMIT 1")
        latest_data = c.fetchone()
        conn.close()

        if latest_data:
            data_to_send = {
                'humidity': latest_data[0],
                'temperature': latest_data[1],
                'soil_status': latest_data[2],
                'npk': {'n': latest_data[3], 'p': latest_data[4], 'k': latest_data[5]}
            }
        else:
            # Si no hay datos, devolver los valores por defecto
            data_to_send = {
                'humidity': 0,
                'temperature': 0,
                'soil_status': '',
                'npk': {'n': 0, 'p': 0, 'k': 0}
            }
        return jsonify(data_to_send)
    except Exception as e:
        print(f"Error al obtener datos del sensor: {e}")
        # Devolver valores por defecto en caso de error
        data_to_send = {
            'humidity': 0,
            'temperature': 0,
            'soil_status': 'Error de conexión',
            'npk': {'n': 0, 'p': 0, 'k': 0}
        }
        return jsonify(data_to_send), 500

# API para obtener estadísticas históricas
@app.route('/api/sensor_stats')
def get_sensor_stats():
    conn = sqlite3.connect('sensor_data.db')
    c = conn.cursor()

    # Estadísticas generales
    c.execute("SELECT COUNT(*), AVG(humidity), AVG(temperature), AVG(n), AVG(p), AVG(k) FROM sensor_readings")
    count, avg_humidity, avg_temperature, avg_n, avg_p, avg_k = c.fetchone()

    # Estadísticas por mes (últimos 12 meses)
    c.execute("""
        SELECT strftime('%Y-%m', timestamp) as month,
               COUNT(*),
               AVG(humidity),
               AVG(temperature),
               AVG(n),
               AVG(p),
               AVG(k)
        FROM sensor_readings
        WHERE timestamp >= date('now', '-12 months')
        GROUP BY month
        ORDER BY month DESC
    """)
    monthly_stats = c.fetchall()

    conn.close()

    return jsonify({
        'total_readings': count,
        'averages': {
            'humidity': round(avg_humidity, 2) if avg_humidity else 0,
            'temperature': round(avg_temperature, 2) if avg_temperature else 0,
            'n': round(avg_n, 2) if avg_n else 0,
            'p': round(avg_p, 2) if avg_p else 0,
            'k': round(avg_k, 2) if avg_k else 0
        },
        'monthly_stats': [
            {
                'month': stat[0],
                'count': stat[1],
                'humidity': round(stat[2], 2),
                'temperature': round(stat[3], 2),
                'n': round(stat[4], 2),
                'p': round(stat[5], 2),
                'k': round(stat[6], 2)
            } for stat in monthly_stats
        ]
    })

# API para obtener datos históricos recientes
@app.route('/api/historical_data/<int:days>')
def get_historical_data(days):
    conn = sqlite3.connect('sensor_data.db')
    c = conn.cursor()

    c.execute("""
        SELECT timestamp, humidity, temperature, soil_status, n, p, k
        FROM sensor_readings
        WHERE timestamp >= date('now', '-{} days')
        ORDER BY timestamp DESC
        LIMIT 1000
    """.format(days))

    data = c.fetchall()
    conn.close()

    return jsonify([
        {
            'timestamp': row[0],
            'humidity': row[1],
            'temperature': row[2],
            'soil_status': row[3],
            'n': row[4],
            'p': row[5],
            'k': row[6]
        } for row in data
    ])

# API para obtener el último mensaje UDP
@app.route('/api/last_udp_message')
def get_last_udp_message():
    return jsonify({'message': last_udp_message})

# API para iniciar lectura de sensores
@app.route('/api/start_sensor_reading', methods=['POST'])
def start_sensor_reading():
    try:
        # Comando para enviar al Arduino: "START_READING"
        command = "START_READING"

        # Enviar comando via UDP al Arduino
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        sock.sendto(command.encode('utf-8'), (ARDUINO_IP, ARDUINO_PORT))
        sock.close()

        print(f"Comando 'START_READING' enviado al Arduino via UDP: {ARDUINO_IP}:{ARDUINO_PORT}")
        return jsonify({'status': 'success', 'message': 'Lectura de sensores iniciada'}), 200
    except Exception as e:
        print(f"Error al enviar comando de inicio de lectura: {e}")
        return jsonify({'status': 'error', 'message': 'Error al iniciar lectura de sensores'}), 500

# API para guardar áreas medidas
@app.route('/api/save_area', methods=['POST'])
@login_required
def save_area():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'status': 'error', 'message': 'No data provided'}), 400

        area_name = data.get('name')
        measurements = data.get('measurements')
        averages = data.get('averages')
        timestamp = data.get('timestamp')

        if not all([area_name, measurements, averages, timestamp]):
            return jsonify({'status': 'error', 'message': 'Missing required fields'}), 400

        # Convertir measurements a JSON string
        measurements_json = json.dumps(measurements)

        # Guardar en base de datos
        conn = sqlite3.connect('sensor_data.db')
        c = conn.cursor()
        c.execute("INSERT INTO areas (name, timestamp, measurements) VALUES (?, ?, ?)",
                  (area_name, timestamp, measurements_json))
        conn.commit()
        conn.close()

        print(f"Área '{area_name}' guardada exitosamente con {len(measurements)} mediciones")
        return jsonify({'status': 'success', 'message': f'Área "{area_name}" guardada exitosamente'}), 200

    except Exception as e:
        print(f"Error al guardar área: {e}")
        return jsonify({'status': 'error', 'message': 'Error interno del servidor'}), 500

@login_manager.user_loader
def load_user(user_id):
    conn = sqlite3.connect('sensor_data.db')
    c = conn.cursor()
    c.execute("SELECT id, username, password_hash FROM users WHERE id = ?", (user_id,))
    user = c.fetchone()
    conn.close()
    if user:
        return User(user[0], user[1], user[2])
    return None

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        conn = sqlite3.connect('sensor_data.db')
        c = conn.cursor()
        c.execute("SELECT id, username, password_hash FROM users WHERE username = ?", (username,))
        user = c.fetchone()
        conn.close()
        if user and check_password_hash(user[2], password):
            user_obj = User(user[0], user[1], user[2])
            login_user(user_obj)
            return redirect(url_for('dashboard'))
        flash('Credenciales inválidas')
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        password_hash = generate_password_hash(password)
        conn = sqlite3.connect('sensor_data.db')
        c = conn.cursor()
        try:
            c.execute("INSERT INTO users (username, password_hash) VALUES (?, ?)", (username, password_hash))
            conn.commit()
            flash('Usuario registrado exitosamente')
            return redirect(url_for('login'))
        except sqlite3.IntegrityError:
            flash('El nombre de usuario ya existe')
        finally:
            conn.close()
    return render_template('register.html')

@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('index.html')

@app.route('/areas')
@login_required
def areas():
    return render_template('areas.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))

# Función para escuchar mensajes UDP
def udp_listener():
    UDP_IP = "0.0.0.0"  # Escuchar en todas las interfaces
    UDP_PORT = 5005

    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.bind((UDP_IP, UDP_PORT))

    print(f"Escuchando mensajes UDP en {UDP_IP}:{UDP_PORT}")

    while True:
        try:
            data, addr = sock.recvfrom(1024)  # Buffer de 1024 bytes
            message = data.decode('utf-8')
            print(f"Mensaje UDP recibido de {addr}: {message}")

            # Procesar el mensaje JSON
            try:
                sensor_json = json.loads(message)
                humidity = sensor_json.get('humidity')
                temperature = sensor_json.get('temperature')
                soil_status = sensor_json.get('soil_status')
                n = sensor_json.get('n')
                p = sensor_json.get('p')
                k = sensor_json.get('k')

                if None in [humidity, temperature, soil_status, n, p, k]:
                    print("Mensaje UDP incompleto")
                    continue

                # Actualizar datos globales
                sensor_data['humidity'] = float(humidity)
                sensor_data['temperature'] = float(temperature)
                sensor_data['soil_status'] = soil_status
                sensor_data['npk']['n'] = float(n)
                sensor_data['npk']['p'] = float(p)
                sensor_data['npk']['k'] = float(k)

                # Guardar en base de datos
                save_sensor_data(sensor_data['humidity'], sensor_data['temperature'], sensor_data['soil_status'],
                               sensor_data['npk']['n'], sensor_data['npk']['p'], sensor_data['npk']['k'])

                global last_udp_message
                last_udp_message = f"{humidity},{temperature},{soil_status},{n},{p},{k}"
                print(f"Datos UDP actualizados: {sensor_data}")

            except json.JSONDecodeError as e:
                print(f"Error al decodificar JSON UDP: {e}")

        except Exception as e:
            print(f"Error en UDP listener: {e}")

if __name__ == '__main__':
    # Inicializar la base de datos
    init_db()

    # Iniciar hilo UDP listener
    udp_thread = threading.Thread(target=udp_listener, daemon=True)
    udp_thread.start()

    # Ejecuta la aplicación Flask (escuchando en todas las interfaces)
    app.run(host='0.0.0.0', debug=True, use_reloader=False)
