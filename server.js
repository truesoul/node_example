var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var USER_MODUL = require('./module/user.js')

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

app.post('/add_user', function (req, res) {
    if(req.body && req.body.name){
        USER_MODUL.addUser(req.body.name, function(value){
            res.status(200).send("User "+value+" added");
        }, function(value){
            res.status(400).send("User "+value+" already exists");
        });
    } else {
        res.status(400).send("Empty body");
    }
});

app.post('/delete_user', function (req, res) {
    if(req.body && req.body.name){
        USER_MODUL.deleteUser(req.body.name, function(value){
            res.status(200).send("User "+value+" deleted");
        }, function(value){
            res.status(400).send("User "+value+" not exists");
        });
    } else {
        res.status(400).send("Empty body");
    }
});

app.get('/users', function (req, res) {
    var users = USER_MODUL.getUsers();
    res.status(200).send({data: users});
});

//app.use('/public', express.static(__dirname + '/public'));

http.createServer(app).listen(8000,"127.0.0.1",function () {
    console.log((new Date()) + 'Server is listening on port ' + 8000);
});




