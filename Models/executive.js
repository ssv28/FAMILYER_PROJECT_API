const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const executivecommitteSchema = new Schema({

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

const Executive = mongoose.model('Executive', executivecommitteSchema);  
module.exports = Executive;
