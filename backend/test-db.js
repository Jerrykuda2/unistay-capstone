const path = require('path');
const mysql = require('mysql2');

require('dotenv').config({ path: path.join(__dirname, '.env') });

console.log('--- Checking Environment Variables ---');
console.log('DB_HOST:', process.env.DB_HOST || 'MISSING');
console.log('DB_USER:', process.env.DB_USER || 'MISSING');

// Connect to the RDS server directly (without targeting a specific database yet)
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

db.connect((err) => {
  if (err) {
    console.error('\nCloud database connection failed:', err.message);
    return;
  }
  console.log('\nSUCCESS: Bypassed the firewall and connected to the RDS Server!');
  
  // Auto-create the database using the exact name from your .env file
  const dbName = process.env.DB_NAME;
  db.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`, (createErr) => {
    if (createErr) {
      console.error('\nFailed to create database:', createErr.message);
    } else {
      console.log(`SUCCESS: Database "${dbName}" is created and ready for UniStay!`);
    }
    db.end();
  });
});