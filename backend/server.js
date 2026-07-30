const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Health Check Endpoint
app.get('/', (req, res) => {
    res.status(200).json({ message: 'UniStay API is running smoothly.' });
});
// --- User Routes ---

// Register a new user
app.post('/api/users', async (req, res) => {
    try {
        const { first_name, last_name, email, password, role } = req.body;

        // 1. Hash the password before it goes anywhere near the database
        const saltRounds = 10;
        const password_hash = await bcrypt.hash(password, saltRounds);

        // 2. Insert the user with the newly generated password_hash
        const sql = 'INSERT INTO users (first_name, last_name, email, password_hash, role) VALUES (?, ?, ?, ?, ?)';
        const values = [first_name, last_name, email, password_hash, role];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Database insertion error:', err);
                return res.status(500).json({ error: 'Failed to create user in database.' });
            }
            
            res.status(201).json({ 
                message: 'User registered successfully!',
                userId: result.insertId 
            });
        });
    } catch (error) {
        console.error('Hashing error:', error);
        res.status(500).json({ error: 'Server error during registration.' });
    }
});
// Fetch all users (GET request)
app.get('/api/users', (req, res) => {
    // Note: We intentionally leave out the password_hash for security
    const sql = 'SELECT id, first_name, last_name, email, role, created_at FROM users';
    
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ error: 'Failed to retrieve users from database.' });
        }
        
        // Send the array of users back to Thunder Client
        res.status(200).json(results);
    });
});
// --- Listing Routes ---

// Create a new property listing (POST request)
app.post('/api/listings', (req, res) => {
    // 1. Grab the listing details from Thunder Client
    // Note: host_id will tie this listing to the user you just created!
    const { host_id, title, description, price, location } = req.body;

    // 2. Write the SQL query 
    const sql = 'INSERT INTO listings (host_id, title, description, price, location) VALUES (?, ?, ?, ?, ?)';
    const values = [host_id, title, description, price, location];

    // 3. Execute the query
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error creating listing:', err);
            return res.status(500).json({ error: 'Failed to create listing in database.' });
        }
        
        res.status(201).json({ 
            message: 'Listing created successfully!', 
            listingId: result.insertId 
        });
    });
});

// Fetch all listings (GET request)
app.get('/api/listings', (req, res) => {
    // Grab all listings, newest first
    const sql = 'SELECT id, host_id, title, description, price, location, created_at FROM listings ORDER BY created_at DESC';
    
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching listings:', err);
            return res.status(500).json({ error: 'Failed to retrieve listings from database.' });
        }
        
        res.status(200).json(results);
    });
});
// Server Initialization
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is actively listening on port ${PORT}`);
});app.get('/api/debug/listings', (req, res) => {
    db.query('DESCRIBE listings', (err, results) => {
        if (err) return res.status(500).json(err);
        
        // This will grab the exact column names from your database
        const columns = results.map(col => col.Field);
        res.status(200).json({ exact_columns: columns });
    });
});
// Middleware to verify the JWT token
const authenticateToken = (req, res, next) => {
    // The token usually comes in the header as: "Bearer <token>"
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    // Verify the token using your secret key
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid or expired token.' });
        }
        
        // Attach the decoded user data (like id and role) to the request
        req.user = decodedUser; 
        
        // Pass control to the next function (the actual route)
        next(); 
    });
};
app.get('/api/debug/listings', (req, res) => {
    db.query('DESCRIBE listings', (err, results) => {
        if (err) return res.status(500).json(err);
        
        // This will grab the exact column names from your database
        const columns = results.map(col => col.Field);
        res.status(200).json({ exact_columns: columns });
    });
});
// Create a new roommate profile (PROTECTED ROUTE)
app.post('/api/roommates', authenticateToken, (req, res) => {
    // We grab the user_id securely from the verified token, not req.body
    const user_id = req.user.id; 
    const { bio, max_budget, lifestyle_habits } = req.body;

    const sql = 'INSERT INTO roommate_profiles (user_id, bio, max_budget, lifestyle_habits) VALUES (?, ?, ?, ?)';
    const values = [user_id, bio, max_budget, lifestyle_habits];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error creating roommate profile:', err);
            return res.status(500).json({ error: 'Failed to create profile.' });
        }
        
        res.status(201).json({ 
            message: 'Roommate profile created successfully!', 
            profileId: result.insertId 
        });
    });
});
// Login an existing user and generate a JWT
app.post('/api/users/login', (req, res) => {
    const { email, password } = req.body;

    // 1. Check if the user exists in the database
    const sql = 'SELECT * FROM users WHERE email = ?';
    
    db.query(sql, [email], async (err, results) => {
        if (err) {
            console.error('Database error during login:', err);
            return res.status(500).json({ error: 'Server error during login.' });
        }
        
        // If no user is found with that email
        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }

        const user = results[0];

        try {
            // 2. Compare the provided password with the hashed password in the database
            const isMatch = await bcrypt.compare(password, user.password_hash);
            
            if (!isMatch) {
                return res.status(401).json({ error: 'Invalid email or password.' });
            }

            // 3. Generate the JSON Web Token
            const token = jwt.sign(
                { id: user.id, role: user.role }, 
                process.env.JWT_SECRET, 
                { expiresIn: '2h' } // Token expires in 2 hours
            );

            // 4. Send the token and user details back to the client
            res.status(200).json({
                message: 'Login successful!',
                token: token,
                user: {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    role: user.role
                }
            });
        } catch (error) {
            console.error('Error comparing passwords:', error);
            res.status(500).json({ error: 'Server error during authentication.' });
        }
    });
});

