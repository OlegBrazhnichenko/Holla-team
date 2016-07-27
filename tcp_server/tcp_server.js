var PORT = '2222';
var HOST = '127.0.0.1';

var net = require('net');

var server = net.createServer(function (socket) {
    socket.write('Echo server\r\n');
    socket.pipe(socket);
});

server.listen(PORT,HOST);