var http = require('http');
var express = require('express');

var app = express();

app.get('/hello', function(req, res){
    res.status(200).send("Hello World");
});

//app.use('/public', express.static(__dirname + '/public'));

http.createServer(app).listen(8000,"127.0.0.1",function () {
    console.log((new Date()) + 'Server is listening on port ' + 8000);
});




