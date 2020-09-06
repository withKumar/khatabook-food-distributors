const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const Business = require('./business.models');

const invoiceSchema = new Schema({
    businessDetails : Business,
    invoiceDate : { default: Date.now },
    invoiceItems: { type : Array },
    invoiceAmount : { type : Number },
    invoiceStatus : { type : Boolean },
    invoicePaidAmount : { type : Number },
    invoiceUnpaidAmount : { type : Number }
});

const invoice = mongoose.model('invoice', invoiceSchema);

module.exports = invoice;