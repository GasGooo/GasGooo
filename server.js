require('dotenv').config()
const express = require("express")

const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const API_PORT = process.env.API_PORT;
const port = process.env.PORT || API_PORT;


// server listening
let listen = server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = {app, server, listen};



