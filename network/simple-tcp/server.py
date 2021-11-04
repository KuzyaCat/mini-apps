import socket

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('0.0.0.0', 8080))
server_socket.listen()
client_socket, client_addr = server_socket.accept()

client_socket

client_socket.recv(11)

client_socket.send(b'hello from the server')
client_socket.send(b'k')

client_socket.recv(14)

client_socket.send(b'HTTP/1.1 200 OK')

client_server.close()