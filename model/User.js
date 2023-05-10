const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    surname: String,
    birthdate: Date,
    email: String,
    password: String,
    address: String
  });  

module.exports = User = mongoose.model("user", userSchema);
