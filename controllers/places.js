const router = require('express').Router();
const db = require('../models');

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

router.get('/new', (req, res) => {
    res.render('places/new');
});

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.render('places/show', { place });
    })
    .catch(err => {
        console.log('err', err);
        res.render('error404');
    })
});

router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', { place })
    })
    .catch(err => {
        res.render('error404')
    })
});

router.post('/', (req, res) => {
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places');
    })
    .catch(err => {
        if (err && err.name == 'ValidationError') {
            let message = 'Validation Error: '
            // TODO: Generate error message(s)
            for (let field in err.errors) {
                message += `${field} was ${err.errors[field].value}?`
                message += `${err.errors[field].message}`
            }
            // TODO: Find all validation errors
            console.log('Validation error message', message)
            res.render('places/new', { message })
        }
        else {
            res.render('error404');
        }
    })
});

router.post('/:id/comment', (req,res) => {
    console.log(req.body);
    req.body.rant = req.body.rant === 'on' ? true : false;
        db.Place.findById(req.params.id)
        .then(place => {
            db.Comments.create(req.body)
            .then(comment => {
                // TODO: Save comment id to place
                place.comments.push(comment.id)
                place.save()
                .then(() => {
                    res.redirect(`/places/${req.params.id}`)
                })
            })
            .catch(err => {
                console.log(err);
                res.render('error404')
            })
        })
        .catch(err => {
            res.render('error404')
        })
});

router.put('/:id', (req,res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
});

router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')

    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
    
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


// router.post('/:id/comments', (req, res) => {
//     const placeId = req.params.id;

//     const newCommentData = req.body;

//     db.Comments.create(newCommentData)
//     .then((newCommentData) => {
//         return db.Place.findByIdAndUpdate(
//             placeId,
//             { $push: { comments: newCommentData.id } },
//         );
//     })
//     .then(() => {
//         res.redirect(`/places/${placeId}`);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });


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