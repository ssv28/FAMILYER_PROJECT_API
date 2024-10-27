const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imagesSchema = new Schema({


    image: {
        type: String,
        required: true
    }


});

const Image = mongoose.model('Image', imagesSchema);  
module.exports = Image;
