const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve a simple route
app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Node.js 🚀</h1>
    <p>This is a simple web app running on Express.</p>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});