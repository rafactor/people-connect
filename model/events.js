const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  client: { 
    info: {type: Schema.Types.ObjectId, ref: "client"},
    accept: Boolean
   },
  provider: { 
    info: {type: Schema.Types.ObjectId, ref: "client"},
    accept: Boolean
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
 