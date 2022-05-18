const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    pay: {
        type: Number,
        required: true
    },
    description: String
});

// model name: 'List' will be used to turn into a collection name in DB
// 'Listing' => 'listing' + 's' => listings
module.exports = mongoose.model('Listing', listingSchema);