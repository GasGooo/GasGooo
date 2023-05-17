const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//userSchema

const userSchema = new Schema({
    name: {type: String, default: null},
    surname: {type: String, default: null},
    birthdate: Date,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    address: String,
    token: { type: String }
  });  

module.exports = User = mongoose.model("user", userSchema);
