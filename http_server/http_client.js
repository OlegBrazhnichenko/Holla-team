var request = require('request');

var data = "!dlroW olleH";
request({uri:"http://localhost:8080/",form:{data: data}}, function (error, response, body) {
    if (!error && response.statusCode == 200){
        console.log(body);
    }else{
        console.log(error);
        console.log("bad");
    }
});

