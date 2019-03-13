const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  client: { 
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address1: { type: String, required: true},
    address2: {type: String},
    city: {type: String, required: true},
    provice: {type: String, required: true},
    postalCode: {type: String, required: true},  
    email: { type: String, required: true},
    phone: { type: String, required: true},
   },
  provider: { 
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address1: { type: String, required: true},
    address2: {type: String},
    city: {type: String, required: true},
    provice: {type: String, required: true},
    postalCode: {type: String, required: true},  
    email: { type: String, required: true},
    phone: { type: String, required: true},
   },
  serviceRequest: String,
  language: [String],  
  messageClient: String,
  messageProvider: String,
  transactionCompleted: Boolean,
  date: { type: Date, default: Date.now }
});

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;
