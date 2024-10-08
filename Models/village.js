const mongoose = require('mongoose');
const villageList = require('../Utils/villages');    //utilities

const Schema = mongoose.Schema;

const villageSchema = new Schema({

    name: {
        type: String,
        required: true,
        enum: {
            values: villageList,  // Restrict to values in the village list
            message: 'Village name `{VALUE}` is not valid!'  // Custom error message
        }
    },

  
});

const VILLAGE= mongoose.model('VILLAGE', villageSchema);  // Create a model from the schema
module.exports = VILLAGE;
