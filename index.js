// Modules and Globals
// Need this for the .env
require('dotenv').config();
// Require needs modules.
const express = require('express');
// Initialize the app object.
const app = express();
const path = require('path');

// Express Settings 
// adding 'set' for home.
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static(path.join(__dirname, 'public')));

// Controllors & Routes
// Adding 'use' for place.js
app.use('/places', require('./controllers/places'));


// Create homepage route.
// Original: res.send('Hello world!');
// Update: res.render('home);
app.get('/', (req, res) => {
    res.render('home');
});


// Create a 404 route. 
// To test this route, visit any non-existent path on the server, e.g., http://localhost:3000/*.
app.get('*', (req, res) => {


// Changing the HTML string for the response body and setting the status code to 404.
// Original: res.send('<h1>404 Page</h1>');
// Update: res.status(404).send('<h1>404 Page</h1>');
// Previous update: res.status(404).send('<h1>404 Page</h1>')
// New update: res.render('error404')
    res.render('error404')
});


// Listen for connections.
// Update: app.listen(****) - After adding .env, changed to:
app.listen(process.env.PORT);
console.log(`Listening to port: ${process.env.PORT}`);