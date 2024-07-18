const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// MySQL connection configuration
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Define a route
app.post('/login', (req, res) => {
    const { username, userpassword } = req.body;
    const sql = "SELECT * FROM emp WHERE email = ? AND password = ?";
  console.log(username,userpassword);
    db.query(sql, [username, userpassword], (err, result) => {
      if (err) {
        console.error("Error occurred:", err);
        return res.status(500).json({ msg: 'Internal Server Error' });
      }
  
      // Check if result is empty (no rows found)
      if (result.length === 0) {
        return res.json({ msg: 0}); // No user found
      } else {
        return res.json({ msg: 1}); // User found
      }
    });
  });
  

// Add a user
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(query, [name, email], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).send('Error inserting user');
      return;
    }

    res.status(201).send('User added');
  });
});

// Start the server
app.listen(5000, () => {
  console.log(`Server is running on 5000`);
});
