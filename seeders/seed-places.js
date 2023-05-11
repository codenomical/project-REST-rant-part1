// const path = require('path');
// const db = require(path.resolve(__dirname, '../models/index'));
// console.log('__dirname:', __dirname);
// const db = require('../models/index');

const db = require('../controllers/models');

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpeg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!');
    process.exit()    
})
.catch(err => {
    console.log('Failure!', err);
    process.exit()
});
