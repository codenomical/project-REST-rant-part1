const router = require('express').Router();
const places = require('./models/places.js');

router.get('/new', (req, res) => {
    res.render('places/new');
});

// First Route created for this file.
// Original: res.send('GET /places');
// Update: res.render('/places/index')
// Update: let place with placeholding data.
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
    }]
    res.render('places/index', { places});
});

router.post("/", (req, res) => {
    console.log(req.body);
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'      
    }
    places.push(req.body)
    // Original: res.send("POST /places stub");
    // Update: res.redirect('/places')
    res.redirect('/places');
})

module.exports = router;