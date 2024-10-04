const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const educationSchema = new Schema({

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

const EDUCATION = mongoose.model('EDUCATION', educationSchema);  // Create a model from the schema
module.exports = EDUCATION;
