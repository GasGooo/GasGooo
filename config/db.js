const mongoose = require('mongoose').default;

const MONGO_URI = process.env.DB_URI;

exports.connect = () => {
  // Connecting to the database
  mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Successfully connected to database");
      })
      .catch((error) => {
        console.log("Database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
      });
};
