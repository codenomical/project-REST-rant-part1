// const path = require('path');
// const db = require(path.resolve(__dirname, '../models/index'));
// console.log('__dirname:', __dirname);
// const db = require('../models/index');

const db = require('../models');

db.Place.create([{
    name: 'Star Cafe',
    city: 'Montrose',
    state: 'CA',
    cuisines: 'Italian, Pizza',
    pic: '/images/star-cafe.png',
    founded: 1989
}, {
    name: "Petrillo's Pizza and Italian Dinners",
    city: 'Glendora',
    state: 'CA',
    cuisines: 'Italian, Pizza',
    pic: '/images/petrillos-pizza.jpg',
    founded: 1959
}, {
    name: 'Donut Man',
    city: 'Glendora',
    state: 'CA',
    cuisines: 'Donuts, Specialties',
    pic: '/images/donut-man.jpg',
    founded: 1972
}])
.then(() => {
    console.log('Success!');
    process.exit()    
})
.catch(err => {
    console.log('Failure!', err);
    process.exit()
});





































// Backup
// db.Place.create ([{
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
// }, {
//     name: 'Star Cafe',
//     city: 'Montrose',
//     state: 'CA',
//     cuisines: 'Italian, Pizza',
//     pic: '/images/star-cafe.png',
//     founded: 1989
// }, {
//     name: "Petrillo's Pizza and Italian Dinners",
//     city: 'Glendora',
//     state: 'CA',
//     cuisines: 'Italian, Pizza',
//     pic: '/images/petrillos-pizza.jpg',
//     founded: 1959
// }, {
//     name: 'Donut Man',
//     city: 'Glendora',
//     state: 'CA',
//     cuisines: 'Donuts, Specialties',
//     pic: '/images/donut-man.jpg',
//     founded: 1972
// }, {
//     name: 'Taco Spot',
//     city: "Los Angeles",
//     state: "CA",
//     pic: "https://images.squarespace-cdn.com/content/v1/5242dfaee4b00a18758047be…",
//     cuisines: "Mexican",
//     founded: 2012 
// }]);











// Graveyard