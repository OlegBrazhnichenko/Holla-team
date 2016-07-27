var PORT = "2222";
var HOST = "127.0.0.1";

var dgram = require('dgram');
var client = dgram.createSocket('udp4');

var message = new Buffer('Hello world!');

client.send(message,0,message.length,PORT,HOST,function (error, bytes) {
    if(error) throw error;
    console.log('UDP message sent to '+HOST+':'+PORT);
    client.close();
});