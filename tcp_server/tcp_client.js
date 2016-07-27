var PORT = '2222';
var HOST = '127.0.0.1';

var net = require('net');

var client = new net.Socket();

client.connect(PORT,HOST, function () {
    console.log('Connected');
    client.write('Hello world!');
});

client.on('data', function (data) {
    console.log('Received: '+ data);
});

client.on('close',function () {
    console.log('Connection closed');
});