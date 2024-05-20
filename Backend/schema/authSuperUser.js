const mongoose = require('mongoose');

const SuperUserSchema = new mongoose.Schema({
    email : String,
    password : String
});

module.exports = mongoose.model('Admin' , SuperUserSchema);