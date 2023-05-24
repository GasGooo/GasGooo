require("dotenv").config();
require("./config/db").connect();
const express = require("express");
const User = require('./model/User');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require("./middleware/auth");



app.use(express.json());

// Register
app.post("/register", async (req, res) => {
    try{

        const {name, surname, birthdate, email, password, address} = req.body;

        console.log("La password non criptata è " + password);

    // Validate user input
    if (!(email && password && name && surname)) {
        res.status(400).send("All input is required");
    } else {
        // check if user already exist
        // Validate if user exist in our database
        const userAlreadyRegistered = await User.findOne({email});

        if(userAlreadyRegistered){
            return res.status(409).send("User Already Exist. Please Login");
        }
    }

        let user;

        bcrypt.hash(password, 10, async function (err, hash) {
            user = await User.create({
                name: name,
                surname: surname,
                email: email.toLowerCase(), // sanitize: convert email to lowercase
                birthdate: birthdate,
                address: address,
                password: hash
            });

            // Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            // save user token
            user.token = token;
            // return new user
            res.status(201).json(user);
        });

} catch (err) {
    console.log(err);
}
});

//Welcome - if request contains valid jwt the user will be greeted
app.post("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌");
});


// Login
app.post("/login", async (req, res) => {

    try {
        // Get user input via json
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        } else {
            // Validate if user exist in the database
            const user = await User.findOne({ email });

            if(user){
                bcrypt.compare(password, user.password, function (err, result){
                    if(result === true){

                        //Create and save user token
                        user.token = jwt.sign(
                            {user_id: user._id, email},
                            process.env.TOKEN_KEY,
                            {
                                expiresIn: "2h",
                            }
                        );

                        res.status(200).json(user);
                    } else if (result === false){
                        res.status(400).send("Invalid Credentials");
                    }
                });
            } else {
                res.status(404).send("User doesn't exist");
            }
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = app;