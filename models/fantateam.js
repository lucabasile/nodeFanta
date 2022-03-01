const mongoose = require('../configs/mongoose');

const fantaTeamSchema= new mongoose.Schema({
        FantaLeague: {
            name: {type:String,required:true},
            fantaLeagueOptionsId: {type:String,required:true},
            fantaLeagueRulesId: {type:String,required:true}		
        },

        FantaLeagueOptions: {
            name: {type:String,required:true},
            description: {type:String, default:''},
            usesGoalKeeperModifier: {type:Boolean,required:true},
            usesDefendersModifier: {type:Boolean,required:true},
            usesMidfieldersModifier: {type:Boolean,required:true},
            usesForwardsModifier: {type:Boolean,required:true}	
        },

        FantaLeagueRules:{
            name: {type:String, required:true},
            description: {type:String, default:''},
            numberOfMembers: {type: Number, required: true},
            maxNumberOfGoalKeepers: {type: Number, required: true, min:2,max:4},
            maxNumberOfGoalDefenders: {type: Number, required: true,  min:3,max:12},
            maxNumberOfGoalMidFielders: {type: Number, required: true,  min:3,max:15},
            maxNumberOfGoalForwards: {type: Number, required: true,  min:1,max:6},
            bonusAssist: {type: Number,required: false, default:1},
            bonusGoal: {type: Number,required: true, default:3},
            paraRigore: {
                "type": Number,
                "required": false,
                "unique": false
            },
            portaImbattuta: {
                "type": Number,
                "required": false,
                "unique": false
            },
            malusCardYellow: {
                "type": Number,
                "required": false,
                "unique": false
            },
            malusCardRed: {
                "type": Number,
                "required": false,
                "unique": false
            },
            goalSub: {
                "type": Number,
                "required": false,
                "unique": false
            },
            autoGoal: {
                "type": Number,
                "required": false,
                "unique": false
            },
            rigoreSbagliato: {
                "type": Number,
                "required": false,
                "unique": false
            },
            firstGoal:{
                "type": Number,
                "required": false,
                "unique": false
            },
            rangeGoal:{
                "type": Number,
                "required": false,
                "unique": false
            }
        }
    }
);

module.exports = mongoose.model('FantaTeam', fantaTeamSchema);