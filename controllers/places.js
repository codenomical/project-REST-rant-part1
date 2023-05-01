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
    // Update: commented out to remove the hard code so we can accept the new submissions on places form the post. At the same time the original restaurants will have the information parsed from ./models/places.js 
    // let places = [{
    //     name: 'H-Thai-ML',
    //     city: 'Seattle',
    //     state: 'WA',
    //     cuisines: 'Thai, Pan-Asian',
    //     pic: '/images/h-thai-ml-tables.jpeg'
    // }, {
    //     name: 'Coding Cat Cafe',
    //     city: 'Phoenix',
    //     state: 'AZ',
    //     cuisines: 'Coffee, Bakery',
    //     pic: '/images/coffee-cat.jpg'
    // }]
    res.render('places/index', { places });
});

router.post("/", (req, res) => {
    // Update: Tested with the console and now commenting out.
    // console.log(req.body);
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