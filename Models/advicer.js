const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const advicerSchema = new Schema({

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

const Advicer = mongoose.model('Advicer', advicerSchema);  
module.exports = Advicer;
