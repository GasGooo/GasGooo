const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    surname: String,
    birthdate: Date,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    address: String
  });  

module.exports = User = mongoose.model("user", userSchema);
