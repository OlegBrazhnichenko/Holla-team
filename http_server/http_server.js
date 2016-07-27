var http = require('http');
var server = http.createServer(function(request,response){
        var headers = request.headers;
        var method = request.method;
        var url = request.url;
        var body = [];
        request.on('error', function (err) {
            console.error(err);
        }).on('data', function (chunk) {
            body.push(((decodeURI(chunk.toString())).split('='))[1]);
        }).on('end', function () {
            body = Buffer.concat(body);
            body = body.split("").reverse().join("");
            response.writeHead(200,{'Content-type': 'application/json'});
            var responseBody = {
                headers: headers,
                method: method,
                url: url,
                body: body
            };
            response.write(JSON.stringify(responseBody));
            response.end();
        });
}).listen(8080);
