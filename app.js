const http = require('http');
const funzica= require('./routes');
const express= require('express');
const bodyParser = require('body-parser');

const app=express();
app.use( bodyParser.json() );//Serve per parsare i body in formato json
app.use(bodyParser.urlencoded({ extended: true }));//Serve per parsare i body url-encoded

const port = process.env.PORT || 3000

app.get('/ciao',(req,res)=>{
    return res.end('Ciao a tutti');
});

app.post('/postalo',(req,res)=>{
    console.log(req.body);
    return res.sendStatus(200);
});

const server = http.createServer(app);

server.listen(port);