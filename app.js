const http = require('http');

/*this function can have any name, it just need a couple of arguments
(you can give them any name but the first is always the request and rhe second the response)
*/
const reqListener = function (request,response){
    /*res.writeHead(200);
    res.end('Hello World Again!');*/

    const url= request.url;
    const method= request.method;

    if(url === '/insert'){
        response.write('<html>');
        response.write('<head><title>A Simple form</title></head>');
        response.write('<body>');
        response.write('<h1 style="color:blue;background-color:orange;text-align:center">Enter Data</h1>');
        response.write('<div><form action="/message" method="POST"><input type="text" name="message"/><button>Send</button></form></div>');
        response.write('</body>');
        response.write('</html>');
        //If I don't use the return the code breaks...WHY?
        return response.end();
    }

    if(url === '/message' && method === 'POST'){
        
        response.statusCode= 302; 
        response.setHeader('Location','/insert');

        request.on('data',()=>{console.log('I\'ve finished receiving your message')});
        console.log("You\'ve sent a message with a POST");
        //If I don't use the return the code breaks...WHY?
        return response.end();
    }

    response.setHeader('Content-Type','text/html');
    response.write('<html>');
    response.write('<head><title>A Simple page</title></head>');
    response.write('<body>');
    response.write('<h1 style="color:blue;background-color:cyan;text-align:center">Hello From Node</h1>');
    response.write('<div>This is a static page</div>');
    response.write('</body>');
    response.write('</html>');
    return response.end();


}

const server = http.createServer(reqListener);

server.listen(3000);