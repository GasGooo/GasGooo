const mongoose = require('mongoose').default;

describe('Connection to the database',  () => {
    it('should return Successfully connected to database', async () => {
        const db = require('../config/db');
        let res = db.connect();
        expect(res).toBe("Successfully connected to database")
    })
});

describe('Connection to the database with invalid URI',  () => {
    it('should return Database connection failed. exiting now...', async () => {
        const MONGO_URI = "wrong-URI";
        // Connecting to the database
        let res = mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => {
            })
            .catch((error) => {
                console.log("Database connection failed. exiting now...");
                console.error(error);
                return "Database connection failed. exiting now...";
            });


    });
});
