// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; // Replace with your actual secret key
const prisma=require("../prisma/prismaClient")
// Route to generate and return a JWT token (for demonstration purposes)
router.post('/login', async (req, res) => {

    res.json({ message:"hey" });
});

module.exports = router;
