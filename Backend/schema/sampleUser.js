const mongoose = require('mongoose');

const userScehama = new mongoose.Schema({
    Name : String,
    Password : String
});

module.exports = mongoose.model('sample_table' , userScehama);