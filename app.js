const http = require('http');

/*this function can have any name, it just need a couple of arguments
(you can give them any name but the first is always the request and rhe second the response)
*/
const reqListener = function (req,res){
    /*res.writeHead(200);
    res.end('Hello World Again!');*/

    const url= req.url;
    const method= req.method;

    if(url === '/insert'){
        res.write('<html>');
        res.write('<head><title>A Simple form</title></head>');
        res.write('<body>');
        res.write('<h1 style="color:blue;background-color:orange;text-align:center">Enter Data</h1>');
        res.write('<div><form action="/message" method="POST"><input type="text" name="message"/><button>Send</button></form></div>');
        res.write('</body>');
        res.write('</html>');
        //If I don't use the return the code breaks...WHY?
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        console.log("You\'ve sent a message with a POST");
        res.statusCode= 302; 
        res.setHeader('Location','/');

        //req.on('data')
        //If I don't use the return the code breaks...WHY?
        return res.end();
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>A Simple page</title></head>');
    res.write('<body>');
    res.write('<h1 style="color:blue;background-color:cyan;text-align:center">Hello From Node</h1>');
    res.write('<div>This is a static page</div>');
    res.write('</body>');
    res.write('</html>');
    return res.end();


}

const server = http.createServer(reqListener);

server.listen(3000);