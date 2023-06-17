const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");


//checkoutSchema

const checkoutSchema = new Schema({
    email: String,
    cashAmount: {type: String, default: null},
    fuel: {type: String, default: null},
    date: Date,
});

module.exports = Checkout = mongoose.model("checkout", checkoutSchema);
