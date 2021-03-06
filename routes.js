const http = require('http');

const someText='Juve ladrona';

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
        response.setHeader('Location','/');
        body =[];
        request.on('data',(chunk)=>{
            console.log(' receiving your message');
            body.push(chunk);
            console.log('body size = '+body.length);
        }).on('end',()=>{
            const theBody=Buffer.concat(body).toString();
            console.log('*******message received! The body is :'+theBody);
        });

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

module.exports.listener=reqListener;
module.exports.testo=someText;

/*
module.exports={
    listener:reqListener,
    module.exports.testo:someText
}
*/