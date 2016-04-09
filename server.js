var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/hello', function(req, res){
    res.status(200).send("Hello World");
});

app.post('/name', function (req, res) {
    if(req.body && req.body.name){
        res.status(200).send("Hello "+req.body.name);
    } else {
        res.status(400).send("Empty body");
    }
});

//app.use('/public', express.static(__dirname + '/public'));

http.createServer(app).listen(8000,"127.0.0.1",function () {
    console.log((new Date()) + 'Server is listening on port ' + 8000);
});




