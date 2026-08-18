const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');

// Ensure this path matches where your db.js file actually is!
const db = require('./config/db.js');

const app = express();

app.use(cors());
app.use(express.json());

// --- 1. S3 CONFIGURATION ---
const s3 = new S3Client({
  region: process.env.AWS_REGION || 'eu-north-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME || 'unistay-uploads-jerry',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const fileName = `hostels/${Date.now()}_${file.originalname}`;
      cb(null, fileName);
    }
  })
});

// --- 2. AUTHENTICATION MIDDLEWARE ---
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid or expired token.' });
        }
        req.user = decodedUser; 
        next(); 
    });
};

// --- 3. TEST & HEALTH ROUTES ---
app.get('/', (req, res) => {
    res.status(200).json({ message: 'UniStay API is running smoothly.' });
});

app.get('/api/db-status', (req, res) => {
    db.query('SELECT "UniStay backend is talking to AWS RDS!" AS message', (err, results) => {
        if (err) return res.status(500).json({ success: false, message: 'DB connection failed', error: err.message });
        res.status(200).json({ success: true, database_response: results[0] });
    });
});

// --- 4. USER AUTHENTICATION ROUTES ---
app.post('/api/users', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const sql = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
        db.query(sql, [name, email, hashedPassword, role || 'student'], (err, result) => {
            if (err) {
                console.error('Database insertion error:', err);
                return res.status(500).json({ error: 'Failed to create user in database.' });
            }
            res.status(201).json({ message: 'User registered successfully!', userId: result.insertId });
        });
    } catch (error) {
        console.error('Hashing error:', error);
        res.status(500).json({ error: 'Server error during registration.' });
    }
});

app.post('/api/users/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ?';
    
    db.query(sql, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: 'Server error during login.' });
        if (results.length === 0) return res.status(401).json({ error: 'Invalid email or password.' });

        const user = results[0];

        try {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({ error: 'Invalid email or password.' });

            const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '2h' });

            res.status(200).json({
                message: 'Login successful!',
                token: token,
                user: { id: user.id, name: user.name, email: user.email, role: user.role }
            });
        } catch (error) {
            console.error('Error comparing passwords:', error);
            res.status(500).json({ error: 'Server error during authentication.' });
        }
    });
});

// --- 5. LISTINGS ROUTES ---
app.post('/api/listings', (req, res) => {
    const { title, location, room_type, price_ghs, contact_number, description, image_url } = req.body;

    const sql = `
        INSERT INTO listings (title, location, room_type, price_ghs, contact_number, description, image_url, verified) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [title, location, room_type, price_ghs, contact_number, description, image_url, false];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error creating listing:', err);
            return res.status(500).json({ error: 'Failed to create listing in database.' });
        }
        res.status(201).json({ message: 'Listing created successfully!', listingId: result.insertId });
    });
});

app.get('/api/listings', (req, res) => {
    const sql = 'SELECT * FROM listings ORDER BY created_at DESC';
    
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching listings:', err);
            return res.status(500).json({ error: 'Failed to retrieve listings.' });
        }
        res.status(200).json(results);
    });
});

// --- 6. S3 UPLOAD ROUTE ---
app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No image file provided' });
    res.json({ imageUrl: req.file.location });
});

// --- 7. ROOMMATE ROUTES ---
app.post('/api/roommates', authenticateToken, (req, res) => {
    const user_id = req.user.id; 
    const { bio, max_budget, lifestyle_habits } = req.body;
    const sql = 'INSERT INTO roommate_profiles (user_id, bio, max_budget, lifestyle_habits) VALUES (?, ?, ?, ?)';
    
    db.query(sql, [user_id, bio, max_budget, lifestyle_habits], (err, result) => {
        if (err) return res.status(500).json({ error: 'Failed to create profile.' });
        res.status(201).json({ message: 'Roommate profile created!', profileId: result.insertId });
    });
});

// --- SERVER INITIALIZATION ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is actively listening on port ${PORT}`);
});