const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const clientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address1: { type: String, required: true},
  address2: {type: String},
  city: {type: String, required: true},
  province: {type: String, required: true},
  postalCode: {type: String, required: true},  
  email: { type: String, required: true},
  phone: { type: String, required: true},
  language: [ String ], 
  password: { type: String, required: true}, 
  serviceProvier: Boolean
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
