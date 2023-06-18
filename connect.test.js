const connect = require("./config/db").connect();
require('dotenv').config();
test('database connection prints Successfully connected to database', () => {
   expect(connect).toBe("Successfully connected to database");
});