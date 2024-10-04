const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vidhvasahaySchema = new Schema({

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
        unique : true

    }

});

const VIDHVASAHAY = mongoose.model('VIDHVASAHAY', vidhvasahaySchema);  // Create a model from the schema
module.exports = VIDHVASAHAY;
