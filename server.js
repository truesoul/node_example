var http = require('http');

http.createServer(function (req, res) {
    setTimeout(function () {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World ...\n');
    }, 2000);
}).listen(8000,"127.0.0.1",function () {
    console.log((new Date()) + 'Server is listening on port ' + 8000);
});


