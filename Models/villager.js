const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const villagerSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    villageName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }


});

const VILLAGER = mongoose.model('VILLAGER', villagerSchema);  
module.exports = VILLAGER;
