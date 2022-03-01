const mongoose = require('../configs/mongoose');

const calendarioSchema = new mongoose.Schema({
    nGiornata: {Number},
    formationMatch:[String],
    realCalendarioId:{type:String, required:true}
})

module.exports = mongoose.model('calendario', calendarioSchema);