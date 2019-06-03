const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let validateName = (name) => name.length >= 1

const usersSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is Required",
        validate: [validateName, "Please fill a valid name"]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [(email) => {
            var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return re.test(email)
        }, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    address: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    postalcode: { type: String, required: true },
    country: { type: String, required: true },
    language: {
        type: String,
        trim: true,
        required: "Language is Required",
    },
    phone: { type: String, required: true },
    password: { type: String, required: true }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;