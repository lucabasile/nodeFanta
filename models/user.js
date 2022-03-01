const mongoose = require('../configs/mongoose');
const fantaTeam = require('./fantateam')

const usersSchema = new mongoose.Schema({
    email:{type:String, required:true, unique:true},
    username:{type:String, required:true},
    password:{type:String, required:true},
    isAdmin:{type: Boolean, default:false},
    leagues:[fantaTeam.FantaLeague.name]
});

module.exports = mongoose.model('user', usersSchema);