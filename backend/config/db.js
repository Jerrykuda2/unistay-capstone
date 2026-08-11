const mysql = require('mysql2');
// Load environment variables from root .env (server.js already calls dotenv),
// but load here as well so this module can be used standalone in tests.
require('dotenv').config();

// Create a connection pool instead of a single connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, // Notice we include the database name here now!
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool with promises so we can use async/await in our routes
module.exports = pool;