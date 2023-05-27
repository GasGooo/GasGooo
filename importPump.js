const express = require("express");
const Pump = require('./model/Pump');
const csv = require('csv-parser');
const mongoose = require("mongoose");
const fs = require('fs');
const csvtojson = require('csvtojson');

function importCSV(){

    fs.createReadStream('./anagrafica_impianti_attivi.csv')
        .pipe(csv())
        .on('data', (row) => {
            // Create new doc pump using mongoose
            //const newPump = new Pump(row);
            console.log(row);
        //     csvtojson()
        //         .fromString(row)
        //         .then( (row)=>{
        //
        //             // let pump = await Pump.create({
        //             //
        //             // })
        //             }
        //         )
        //
        //
        //     // Save doc into database
        //     // newPump.save((err) => {
        //     //     if (err) {
        //     //         console.error(err);
        //     //     }
        //     // });
        // })
        // .on('end', () => {
        //     console.log('Import complete');
        // });

        return 1;
});

// module.exports = importCSV();