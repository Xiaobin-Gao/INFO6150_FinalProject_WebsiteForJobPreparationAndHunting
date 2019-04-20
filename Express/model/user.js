const mongoose = require('mongoose');

const User = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    type:String
});

module.exports = mongoose.model('User', User);