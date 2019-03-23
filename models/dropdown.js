const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dropdownSchema = new Schema({
  category: [String],
  subCategory: [String],
  coverage: [String],

});

const Dropdown = mongoose.model("Dropdown", dropdownSchema);

module.exports = Dropdown;