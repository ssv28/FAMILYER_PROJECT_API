const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loansahaySchema = new Schema({

    fullName : {
        type: String,
        required: true,
    },

    education : {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    contactNo: {
        type: Number,
        required: true,
    }

});

const LOANSAHAY = mongoose.model('LOANSAHAY', loansahaySchema);  // Create a model from the schema
module.exports = LOANSAHAY;
