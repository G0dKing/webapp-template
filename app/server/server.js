// Server.js Template

// Define Imports
const express = require('express');
const cors = require('cors');
const path = require('path');

// Initialize
const app = express();
app.use(cors())

// Serve Static Build Files
app.use(express.static(path.join(__dirname, "..", "client", "dist")));

// Fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

// Server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
