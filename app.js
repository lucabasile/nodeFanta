const http = require('http');
const funzica= require('./routes');
const express= require('express');

const app=express();

const port = process.env.PORT || 3000

app.get('/ciao',(req,res)=>{
    return res.end('Ciao a tutti');
});

/*app.post('/postalo',(req,res)=>{
    console.log(req.body);
    return;
});*/

const server = http.createServer(app);

server.listen(port);