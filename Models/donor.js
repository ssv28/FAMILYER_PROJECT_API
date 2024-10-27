const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const donorSchema = new Schema({

    nameOfDonor: {
        type: String,
        required: true
    },
    donorVillage: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "VILLAGE",
        required: true,
    },
    donation: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }


});

const Donor = mongoose.model('Donor', donorSchema);  
module.exports = Donor;
