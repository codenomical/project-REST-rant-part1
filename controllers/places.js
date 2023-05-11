const router = require('express').Router();
const db = require('./models');

router.get('/', (req, res) => {
    db.Place.find()
    .then(places => {
        res.render('places/index', { places });
    })
    .catch(err => {
        console.log(err);
        res.render('error404');
    })
});

router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places');
    })
    .catch(err => {
        console.log('err', err);
        res.render('error404');
    })
});

router.get('/new', (req, res) => {
    res.render('places/new');
});

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place });
    })
    .catch(err => {
        console.log('err', err);
        res.render('error404');
    })
});

router.post('/:id/rant', (req, res) => {
    res.send('Get /places/:id/rant stub');
});

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub');
});
  

module.exports = router;

















































// Graveyard
// PREMONGO
// const router = require('express').Router();
// const places = require('./models/places.js');

// router.get('/new', (req, res) => {
//     res.render('places/new');
// });

// // First Route created for this file.
// // Original: res.send('GET /places');
// // Update: res.render('/places/index')
// // Update: let place with placeholding data.
// router.get('/', (req, res) => {
//     res.render('places/index', { places });
// });

// router.get('/:id/edit', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404');
//     }
//     else if (!places[id]) {
//         res.render('error404');
//     }
//     else {
//         res.render('places/edit', {place: places[id]});
//     }
// });
  

// router.get('/:id', (req, res) => {
//     let id = Number(req.params.id);
//     if (isNaN(id)) {
//         res.render('error404');
//     } else if (!places[id]) {
//         res.render('error404');
//     } else {
//         res.render('places/show', { place: places[id], id });
//     }   
// });

// router.post("/", (req, res) => {
//     // Update: Tested with the console and now commenting out.
//     // console.log(req.body);
//     if (!req.body.pic) {
//         // Default image if one is not provided
//         req.body.pic = 'http://placekitten.com/400/400'
//     }
//     if (!req.body.city) {
//         req.body.city = 'Anytown'
//     }
//     if (!req.body.state) {
//         req.body.state = 'USA'      
//     }
//     places.push(req.body)
//     // Original: res.send("POST /places stub");
//     // Update: res.redirect('/places')
//     res.redirect('/places');
// });

// router.put('/:id', (req,res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404');
//     }
//     else if (!places[id]) {
//         res.render('error404');
//     }
//     else {
//         // Dig into req.body and make sure data is valid
//         if (!req.body.pic) {
//                  // Default image if one is not provided
//         req.body.pic = 'http://placekitten.com/400/400'
//     }
//     if (!req.body.city) {
//         req.body.city = 'Anytown'
//     }
//     if (!req.body.state) {
//         req.body.state = 'USA'      
//         }
//     }
//         // Save the new data into places[id]
//         places[id] = req.body
//         res.redirect(`/places/${id}`);
// });

// router.delete('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//       res.render('error404');
//     }
//     else if (!places[id]) {
//       res.render('error404');
//     }
//     else {
//       places.splice(id, 1)  
//       res.redirect('/places');
//     }
//   })











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