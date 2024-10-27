const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const villagerSchema = new Schema({

    yourName: {
        type: String,
        required: true
    },
    yourVillage: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "VILLAGE",
        required: true,
    },
    profilePicture: {
        type: String,
        required: true
    }


});

const VILLAGER = mongoose.model('VILLAGER', villagerSchema);  
module.exports = VILLAGER;
