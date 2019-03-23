const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const servicesSchema = new Schema({
provider: { 
        info: {type: Schema.Types.ObjectId, ref: "Client"},
       },
  category: { type: String, required: true },
  subCategory: { type: String },
  coverage: [String],
  description: { type: String },
  birthDate: {type: Date},

});

const Services = mongoose.model("Services", servicesSchema);

module.exports = Services;
