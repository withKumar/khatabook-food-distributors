const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    itemType: { type : String, minlength: 3 },
    itemName : { type : String },
    itemQuantity : { type : Number },
    itemUnit : { type : String, minlength: 2, maxlength: 2 },
    itemPrice : { type : Number }
});

const item = mongoose.model('item', itemSchema);

module.exports = item;