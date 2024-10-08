const mongoose = require('mongoose');
const surnameList = require('../Utils/surnames');    //utilities

const Schema = mongoose.Schema;

const surnameSchema = new Schema({

    surName: {
        type: String,
        required: true,
        enum: {
            values: surnameList,  // Restrict to values in the village list
            message: 'Surname `{VALUE}` is not valid!'  // Custom error message
        }
    },

  
});

const SURNAME= mongoose.model('SURNAME', surnameSchema);  // Create a model from the schema
module.exports = SURNAME;
