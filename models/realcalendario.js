const mongoose = require('../configs/mongoose');

const realCalendarioSchema = new mongoose.Schema({
    nGionata: {type:Number, required:true},
    dataTime:{type:Date}
})

module.exports = mongoose.model('realCalendario', realCalendarioSchema);