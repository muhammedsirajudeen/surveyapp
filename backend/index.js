// index.js

const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const cors=require("cors")

const authRoutes=require("./routes/authRoutes")
const formRoutes=require("./routes/formRoutes")
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())



//after a while add middleware logic to handle jwt authentication


const verifyToken = async (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }
  
    try {
      const decoded = await jwt.verify(token, secretKey);
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  };
  

app.use('/auth',authRoutes)
app.use('/form',formRoutes)



if (process.env.NODE_ENV === 'production') {
  // Load SSL certificate for HTTPS in production
  const privateKey = fs.readFileSync(path.join(__dirname, 'path/to/private-key.pem'), 'utf8');
  const certificate = fs.readFileSync(path.join(__dirname, 'path/to/certificate.pem'), 'utf8');
  const ca = fs.readFileSync(path.join(__dirname, 'path/to/ca.pem'), 'utf8');

  const credentials = { key: privateKey, cert: certificate, ca: ca };

  // Create an HTTPS server
  const httpsServer = https.createServer(credentials, app);

  // Listen on the specified port
  httpsServer.listen(port, () => {
    console.log(`Server listening on https://localhost:${port}`);
  });
} else {
  // Start the server with HTTP in development
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}
