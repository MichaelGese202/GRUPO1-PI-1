import socket
import json

# Configuración del servidor UDP
SERVER_IP = "127.0.0.1"  # localhost
SERVER_PORT = 5005  # Puerto UDP

# Datos simulados (formato JSON: {"humidity": float, "temperature": float, "soil_status": str, "n": float, "p": float, "k": float})
data = {
    "humidity": 200.0,
    "temperature": 30.3,
    "soil_status": "Perfecto",
    "n": 100.0,
    "p": 81.8,
    "k": 50.2
}

# Crear socket UDP
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Convertir datos a JSON string
message = json.dumps(data)

# Enviar el mensaje al servidor via UDP
try:
    sock.sendto(message.encode('utf-8'), (SERVER_IP, SERVER_PORT))
    print(f"Datos enviados exitosamente via UDP: {data}")
except Exception as e:
    print(f"Error al enviar datos via UDP: {e}")
finally:
    sock.close()
