const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: String,
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: Number
});

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema);























































































// Graveyard
// PREMONGO
// module.exports = [{
//     id: 0,
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/h-thai-ml-tables.jpeg'
// }, {
//     id: 1,
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/coffee-cat.jpg'
// }]