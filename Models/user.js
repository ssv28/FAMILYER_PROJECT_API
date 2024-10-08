const mongoose = require('mongoose');
const villageList = require('../Utils/villages');    //utilities

const Schema = mongoose.Schema;

const userSchema = new Schema({

    contactNumber: {
        type: Number,
        unique: true,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    surname: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "SURNAME",
        required: true,
    },

    // villageName: {
    //     type: String,
    //     required: true,
    //     enum: {
    //         values: villageList,  // Restrict to values in the village list
    //         message: 'Village name `{VALUE}` is not valid!'  // Custom error message
    //     }
    // },

    villageName: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "VILLAGE",
        required: true,

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
