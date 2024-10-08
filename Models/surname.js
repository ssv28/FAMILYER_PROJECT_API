const mongoose = require('mongoose');
const surnameList = require('../Utils/surnames');    //utilities

const Schema = mongoose.Schema;

const surnameSchema = new Schema({

    name: {
        type: String,
        required: true,
        enum: {
            values: surnameList,  
            message: 'Surname `{VALUE}` is not valid!'  
        }
    },

  
});

const SURNAME= mongoose.model('SURNAME', surnameSchema);  // Create a model from the schema
module.exports = SURNAME;
