const mongoose = require('../configs/mongoose')
const soccerPlayer = require('./soccerplayer')

const squadSchema = new mongoose.Schema({
    name:{type:String, required:true, unique:true},
    userId:{type:String, required:true},
    idFantaLega:{type:String, required:true},
    soccerPlayersIds:[soccerPlayer],
    puntiFanta:{type:Number, required:true},
    formationId:{type:String, required:true}
});

module.exports = mongoose.model('squad', squadSchema);