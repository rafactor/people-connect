const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    provider: { type: Schema.Types.ObjectId, ref: "Users" },
    client: { type: Schema.Types.ObjectId, ref: "Users" },
    service: { type: Schema.Types.ObjectId, ref: "Services" },
    isCompleted: { type: Boolean, default: false }
});

const Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;
