const mongoose = require('mongoose');
const villageList = require('../Utils/villages');    //utilities

const Schema = mongoose.Schema;

const userSchema = new Schema({

    contactNumber: {
        type: Number,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    surname: {
        type: String,
        required: true,
    },

    villageName: {
        type: String,
        required: true,
        enum: {
            values: villageList,  // Restrict to values in the village list
            message: 'Village name `{VALUE}` is not valid!'  // Custom error message
        }
    },

    role: {
        type: String,
        required: true,
        enum: ['admin', 'user'],
        default: 'user'
    }
});

const USER = mongoose.model('USER', userSchema);  // Create a model from the schema
module.exports = USER;
