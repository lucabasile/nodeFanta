const mongoose = require('../configs/mongoose');
const 

const formationSchema = new mongoose.Schema({
    titolari:[String],
    panchinari:[String],
    nonConvocati:[String],
    modulo:{type:String, enum: ['4-4-2','4-3-3','5-3-2','5-4-1','4-5-1','3-4-3','3-5-2']}
});

module.exports = mongoose.model('formation', formationSchema);