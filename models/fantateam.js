const mongoose = require('../configs/mongoose');

const fantaTeamSchema= new mongoose.Schema(
    {
        name: {type:String,required:true},
        fantaLeagueName: String,
        fantaLeagueId:{type:String,required:true}
    }
);

module.exports= mongoose.model('FantaTeam',fantaTeamSchema);