const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    title: String,
    price: String,
    image: String,
    amount: Number,

});

module.exports = mongoose.model('Product', CartSchema);