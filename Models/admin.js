const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    }

});

const ADMIN = mongoose.model('ADMIN', adminSchema);  // Create a model from the schema
module.exports = ADMIN;
