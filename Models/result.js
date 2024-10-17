const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resultsSchema = new Schema({

    resultUrl: {
        type: String,
    },

    schoolName: {
        type: String,
        required: true,
    },

    totalMarks: {
        type: String,
        required: true,
    },

    ObtainMarks: {
        type: String,
        required: true,
    },

    year: {
        type: Number,
        required: true,
    },

    totalSubject: {
        type: Number,
        required: true,
    }



});

const RESULT = mongoose.model('RESULT', resultsSchema);  // Create a model from the schema
module.exports = RESULT;
