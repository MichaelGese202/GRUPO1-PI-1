import socket

# Crear socket UDP
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Dirección del servidor UDP (donde corre Flask)
SERVER_IP = "127.0.0.1"  # localhost
SERVER_PORT = 5005        # mismo puerto del servidor UDP

# Datos simulados (formato: humedad, temperatura, N, P, K)
mensaje = "1.2.2"

# Enviar el mensaje al servidor
sock.sendto(mensaje.encode(), (SERVER_IP, SERVER_PORT))
print(f"Mensaje enviado: {mensaje}")

sock.close()
