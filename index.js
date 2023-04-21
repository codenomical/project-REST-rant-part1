// Require needs modules.
const express = require('express');
// Initialize the app object.
const app = express();

// Create homepage route.
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Listen for connections.
app.listen(3000)