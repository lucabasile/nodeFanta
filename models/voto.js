const mongoose = require('../configs/mongoose');

const votoSchema = new mongoose.Schema({
    valutazione:{type:Number,required:true},
    nGiormata: {type:Number,required:true},
    nGoal:{type:Number, default:0},
    nAssist:{type:Number, default:0},
    nCardYellow:{type:Number,min:0,max:2, default:0},
    nCardRed:{type:Number,min:0,max:1, default:0},
    paraRigore:{type:Number,min:0, default:0},
    portaImbattuta:{type:Boolean, default:true},
    subGoal:{type:Number, default:0},
    autoGoal:{type:Number,min:0, default:0},
    rigoreSbagliato:{type:Number, default:0}
});

module.exports = mongoose.model('voto', votoSchema);