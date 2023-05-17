require('dotenv').config()
const express = require("express")
// const User = require("./model/User");
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const db = require('./config/db');
// const routes = require('./routes');
//
// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//
// app.use('/api', routes);

const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const API_PORT = process.env.API_PORT;
const port = process.env.PORT || API_PORT;


// server listening
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


app.get("/",function(req, res){
  res.send("Bonasera")
})



