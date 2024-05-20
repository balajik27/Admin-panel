const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Title: String,
    Category : String,
    Qty : Number,
    Description : String,
    Image : String,
    Price : Number,
});

module.exports = mongoose.model('product' , ProductSchema);