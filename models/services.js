const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const servicesSchema = new Schema({
  provider: {
    type: Schema.Types.ObjectId, ref: "Users"
  },
  title: { type: String, required: true },
  category: { type: String, required: true },
  language: { type: String, required: true },
  coverage: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },

});

const Services = mongoose.model("Services", servicesSchema);

module.exports = Services;
