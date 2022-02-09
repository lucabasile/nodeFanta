const http = require('http');

const reqListener = function (req,res){
    res.writeHead(200);
    res.end('Hello World Again!');
}

const server = http.createServer(reqListener);

server.listen(3000);