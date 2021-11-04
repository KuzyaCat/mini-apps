import socket

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

client_socket.connect(('0.0.0.0', 8080))

client_socket

client_socket.send(b'hello world')

client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)
client_socket.recv(1)

client_socket.send(b'GET / HTTP/1.1')

client_socket.recv(15)