// Need this for the .env
require('dotenv').config();
// Require needs modules.
const express = require('express');
// Initialize the app object.
const app = express();

// Create homepage route.
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Create a 404 route. 
// Starting point: After written out you can see it by doing local:3000/*.
// Changing the HTML sting for the response body and setting the status code to 404.
// Original: res.send('<h1>404 Page</h1>');
// Update: res.status(404).send('<h1>404 Page</h1>');
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
});

// Listen for connections.
// Update: app.listen(3000) - After adding .env, changed to:
app.listen(process.env.PORT);