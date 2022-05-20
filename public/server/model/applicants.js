const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicantSchema = new Schema({
    jobTitle: {
        type: String,
        required: true
    },
    applicantName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

// model name: 'List' will be used to turn into a collection name in DB
// 'Listing' => 'listing' + 's' => listings
module.exports = mongoose.model('applicant', applicantSchema);