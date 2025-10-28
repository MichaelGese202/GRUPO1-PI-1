from flask import Flask, render_template, jsonify, request, redirect, url_for, flash
import socket  # Para la comunicación UDP con Arduino
import time
import threading
import sqlite3
import datetime
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__, static_folder='static')
app.secret_key = 'tu_clave_secreta_aqui'  # Cambia esto por una clave segura

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

# Configuración del servidor UDP para recibir datos del Arduino Uno
# NOTA: Ajusta la IP y puerto según tu red. Usa '0.0.0.0' para escuchar en todas las interfaces.
UDP_IP = '127.0.0.1'  # IP del servidor (127.0.0.1 para localhost)
UDP_PORT = 5005  # Puerto UDP para recibir datos del Arduino

# Variable global para almacenar los datos del sensor
sensor_data = {
    'humidity': 0,
    'temperature': 0,
    'npk': {'n': 0, 'p': 0, 'k': 0}
}

# Variable global para almacenar el último mensaje UDP recibido
last_udp_message = ""

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
                  n REAL,
                  p REAL,
                  k REAL)''')
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  username TEXT UNIQUE NOT NULL,
                  password_hash TEXT NOT NULL)''')
    conn.commit()
    conn.close()

# Función para guardar datos en la base de datos
def save_sensor_data(humidity, temperature, n, p, k):
    conn = sqlite3.connect('sensor_data.db')
    c = conn.cursor()
    timestamp = datetime.datetime.now().isoformat()
    c.execute("INSERT INTO sensor_readings (timestamp, humidity, temperature, n, p, k) VALUES (?, ?, ?, ?, ?, ?)",
              (timestamp, humidity, temperature, n, p, k))
    conn.commit()
    conn.close()

# Función para recibir datos del Arduino via UDP
def receive_arduino_data():
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)  # Permitir reutilizar la dirección
        sock.bind((UDP_IP, UDP_PORT))
        print(f"Servidor UDP escuchando en {UDP_IP}:{UDP_PORT}")
        while True:
            data, addr = sock.recvfrom(1024)  # Recibe hasta 1024 bytes
            message = data.decode('utf-8').strip()
            global last_udp_message
            last_udp_message = message  # Almacenar el último mensaje
            print(f"Recibido de {addr}: {message}")
            print(f"Último mensaje UDP almacenado: {last_udp_message}")
            try:
                # Parsea los datos (espera formato: "humidity,temperature,n,p,k")
                parts = message.split(',')
                if len(parts) == 5:
                    sensor_data['humidity'] = float(parts[0])
                    sensor_data['temperature'] = float(parts[1])
                    sensor_data['npk']['n'] = float(parts[2])
                    sensor_data['npk']['p'] = float(parts[3])
                    sensor_data['npk']['k'] = float(parts[4])
                    # Guardar datos en la base de datos
                    save_sensor_data(sensor_data['humidity'], sensor_data['temperature'],
                                   sensor_data['npk']['n'], sensor_data['npk']['p'], sensor_data['npk']['k'])
                    print(f"Datos actualizados: {sensor_data}")
                else:
                    print(f"Formato de datos incorrecto: {message}")
            except ValueError as e:
                print(f"Error al parsear datos: {e}")
    except Exception as e:
        print(f"Error en el servidor UDP: {e}")

# Ruta principal para mostrar la página web
@app.route('/')
@login_required
def index():
    return render_template('index.html')

# API para obtener los datos del sensor en formato JSON
@app.route('/api/sensor_data')
def get_sensor_data():
    return jsonify(sensor_data)

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
        SELECT timestamp, humidity, temperature, n, p, k
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
            'n': row[3],
            'p': row[4],
            'k': row[5]
        } for row in data
    ])

# API para obtener el último mensaje UDP
@app.route('/api/last_udp_message')
def get_last_udp_message():
    return jsonify({'message': last_udp_message})

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

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))

if __name__ == '__main__':
    # Inicializar la base de datos
    init_db()

    # Inicia el hilo para recibir datos del Arduino via UDP
    arduino_thread = threading.Thread(target=receive_arduino_data, daemon=True)
    arduino_thread.start()

    # Ejecuta la aplicación Flask
    app.run(debug=True, use_reloader=False)
