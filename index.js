// Need this for the .env
require('dotenv').config();
// Require needs modules.
const express = require('express');
// Initialize the app object.
const app = express();

// Adding 'use' for place.js
app.use('/places', require('./controllers/places'));

// Create homepage route.
app.get('/', (req, res) => {
    res.send('Hello world!');
});


// Create a 404 route. 
// Starting point: After written out you can see it by doing local:3000/*.
app.get('*', (req, res) => {


// Changing the HTML string for the response body and setting the status code to 404.
// Original: res.send('<h1>404 Page</h1>');
// Update: res.status(404).send('<h1>404 Page</h1>');
    res.status(404).send('<h1>404 Page</h1>')
});


// Listen for connections.
// Update: app.listen(3000) - After adding .env, changed to:
app.listen(process.env.PORT);