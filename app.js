require("dotenv").config();
require("./config/db").connect();
const express = require("express");
const User = require('./model/User');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');
const passport = require('passport')
require('./middleware/auth')


app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());


// Register
app.post("/register", async (req, res) => {
    try{

        const {name, surname, birthdate, email, password, address} = req.body;

    // Validate user input
    if (!(email && password && name && surname)) {
        res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const userAlreadyRegistered = await User.findOne({email});

    if(userAlreadyRegistered){
        return res.status(409).send("User Already Exist. Please Login");
    }

    let encryptedPassword = bcrypt.genSalt(20, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            console.log(hash);
            return hash;
        });
    });

    const user = await User.create({
        name,
        surname,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
        birthdate,
        address
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
} catch (err) {
    console.log(err);
}
});

app.post("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});


// Login
app.post("/login", async (req, res) => {
    // Our login logic starts here
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
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

            // user
            res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
});


app.get('/success', (req, res) => {
    //WIP - gonna render the 'succesfully logged in page'
});
// Google Sign in
app.get("/google", passport.authenticate('google'), {scope: ['profile', 'email']});
// redirection if successful sign in 
app.get('/', passport.authenticate('google', {failureRedirect: '/failed'}),
    function(req, res){
        res.redirect('/success');
    });


module.exports = app;