const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const businessSchema = new Schema({
    businessName : { type : String },
    businessAdress : { type : String },
    businessContact : { type: Number, minlength: 1, maxlength : 10 }
});

const BusinessDetail = mongoose.model('BusinessDetail', businessSchema);

module.exports = BusinessDetail;