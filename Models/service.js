const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const servicesSchema = new Schema({

    fullName: {
        type: String,
        required: true,
    },

    education: {
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

const SERVICES = mongoose.model('SERVICES', servicesSchema);  // Create a model from the schema
module.exports = SERVICES;
