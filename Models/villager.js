const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const villagerSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    villageName: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "VILLAGE",
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    }


});

const VILLAGER = mongoose.model('VILLAGER', villagerSchema);  
module.exports = VILLAGER;
