const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dropdownSchema = new Schema({
  category: [String],
  subCategory: [String],
  coverage: [String],

});

const Dropdown = mongoose.model("Services", dropdownSchema);

module.exports = Dropdown;