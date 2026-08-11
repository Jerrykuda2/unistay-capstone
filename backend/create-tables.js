require('dotenv').config(); // <-- THIS IS THE MAGIC FIX
const db = require('./config/db'); // Ensure this matches your actual db.js path!

const setupDatabase = async () => {
    try {
        const promisePool = db.promise();

        console.log('⏳ Starting table creation process...');

        // 1. Create Users Table
        console.log('Creating users table...');
        await promisePool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                first_name VARCHAR(100) NOT NULL,
                last_name VARCHAR(100) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                role VARCHAR(50) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('✅ Users table ready!');

        // 2. Create Listings Table
        console.log('Creating listings table...');
        await promisePool.query(`
            CREATE TABLE IF NOT EXISTS listings (
                id INT AUTO_INCREMENT PRIMARY KEY,
                host_id INT NOT NULL,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                price DECIMAL(10, 2) NOT NULL,
                location VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (host_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `);
        console.log('✅ Listings table ready!');

        // 3. Create Roommate Profiles Table
        console.log('Creating roommate_profiles table...');
        await promisePool.query(`
            CREATE TABLE IF NOT EXISTS roommate_profiles (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                bio TEXT,
                max_budget DECIMAL(10, 2),
                lifestyle_habits TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `);
        console.log('✅ Roommate profiles table ready!');

        console.log('🎉 All tables successfully created in AWS RDS!');
        process.exit(0); 
        
    } catch (error) {
        console.error('❌ Error creating tables:', error.message);
        process.exit(1); 
    }
};

setupDatabase();