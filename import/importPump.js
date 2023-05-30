const Pump = require('../model/Pump');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const json = require('csvtojson');
require("../config/db").connect();

const csvFilePath='/home/lyreplus/GasGooo/import/pumps.csv';
//
// exports.importPump = () => {
//
//     let jsonArray = json().fromFile(csvFilePath)
//         .then((jsonObj)=>{
//             console.log("Done");
//         });
//
//     Pump.insertMany(jsonArray).then(r => console.log(r)).catch(e => console.log(e));
//
// };