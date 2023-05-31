require("dotenv").config();
require("./config/db").connect();
const express = require("express");
const User = require('./model/User');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');
const passport = require('passport')
const cookieSession = require('cookie-session');
const path = require("path");
require('./middleware/auth')
const cookieParser = require('cookie-parser')
// require("./import/importPump").importPump();


app.use(express.json());
// app.use(passport.initialize());
// app.use(passport.session());
app.use(express.static(path.join(__dirname,'UI')))


app.use(cookieSession({
	name: 'google-auth-session',
	keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());
	
// Google Auth
app.get('/auth' , passport.authenticate('google', { scope:
	[ 'email', 'profile' ]
}));

// Google Auth Callback
app.get( '/auth/callback',
	passport.authenticate( 'google', {
		successRedirect: '/auth/callback/success',
		failureRedirect: '/auth/callback/failure'
}));


// Google Auth Success
app.get('/auth/callback/success' , (req , res) => {
	if(!req.user)
		res.redirect('/auth/callback/failure');
	res.send("Google auth working ! User email : " + req.user.email);
    // res.sendFile('success.html')
});

// Google Auth Failure
app.get('/auth/callback/failure' , (req , res) => {
	res.send("Error");
})


//========= Manual registration ==========
// Register
app.post("/register", async (req, res) => {
    try{

        console.log(req.body);
        const {name, surname, birthdate, email, password, address} = req.body;

    // Validate user input
    if (!(email && password && name && surname)) {
        res.status(400).send("All input is required");
    } else {
        // Validate if user exist in our database
        const userAlreadyRegistered = await User.findOne({email});

        if(userAlreadyRegistered){
            return res.status(409).send("User Already Exist. Please Login");
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

            // Create and save user token
            user.token = jwt.sign(
                {user_id: user._id, email},
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            // return new user
            res.status(201).json(user);
        });
    }

} catch (err) {
    console.log(err);
}
});


//Welcome - if request contains valid jwt the user will be greeted
// app.post("/welcome", auth, (req, res) => {
//     res.status(200).send("Welcome 🙌");
// });


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
                        //Set samesite to none to allow cross site cookies
                        res.cookie(`User token`,user.token, {sameSite: 'none'});
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


//app get having the user email as a parameter
app.get('/user/:email', async (req, res) => {
    try {
        const user = await User.findOne({email: req.params.email});
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
});

//app delete user having the user email as a parameter
app.delete('/user/:email', async (req, res) => {
    try {
        const user = await User.deleteOne({email: req.params.email});
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
});




module.exports = app;