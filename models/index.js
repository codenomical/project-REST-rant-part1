// placed the dotenv to access the MONGO_URI
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports.Place = require('./places');
module.exports.Comments = require('./comment');