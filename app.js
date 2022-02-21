const http = require('http');
const funzica= require('./routes');
const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const FantaTeam= require('./models/fantateam');


const port = process.env.PORT || 3000

const app=express();
app.use(bodyParser.json());//Serve per parsare i body in formato json
app.use(bodyParser.urlencoded({ extended: true }));//Serve per parsare i body url-encoded

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Header","Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
    next();
});



/*app.get('/ciao',(req,res)=>{
    res.end('Ciao a tutti');
});

app.post('/postalo',(req,res)=>{
    console.log('Il campo era '+req.body.campo);
    res.sendStatus(200);
});*/

app.get('/fantateam',(req,res)=>{
    //const filter = {};
    results=  FantaTeam.find().then(docs=>{
        //console.log(docs);
        res.status(200).json({
            message:"Fetched all fantateams",
            fantateams:docs
        })
    });   
});

app.post('/fantateam',(req,res)=>{
    const body= req.body;

   FantaTeam.find({name:body.name,fantaLeagueId:body.fantaLeagueId}).then(docs=>{
        if(docs.length==0){
            if(body.name){
                team = new FantaTeam({name:body.name,fantaLeagueName:body.fantaLeagueName,fantaLeagueId:body.fantaLeagueId});
                team.save((err,doc)=>{
                    if(err) console .log(err);
                });
            }
            res.sendStatus(200);
        }else{
            res.sendStatus(400);
        }
   });

});

const server = http.createServer(app);

server.listen(port);