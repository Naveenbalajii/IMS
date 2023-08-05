const mongoose = require('mongoose')

const imsschema = new mongoose.Schema({
    laptopname: {
        type: String,
        required: true
    },
    laptopmodel: {
        type: String,
        required: true
    },
    stockcount: {
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
    description: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Ims",imsschema);