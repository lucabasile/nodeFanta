const mongoose = require('../configs/mongoose');
const voti = require('./voto');

const soccerPlayerSchema = new mongoose.Schema({
    name:{type:String, required:true},
    ruolo:{type:String,required:true},
    voti:[voti]
});

module.exports = mongoose.model('soccerPlayer', soccerPlayerSchema);