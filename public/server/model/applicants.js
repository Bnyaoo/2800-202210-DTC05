const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Defines what info is going to be presented to employers when an applicant applies for a job */
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