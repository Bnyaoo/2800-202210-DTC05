const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
<<<<<<< HEAD
    gender : String,
    status : String
=======
    password : {
        type: String,
        required: true
    },
    privilege : {
        type: String,
        required: true
    },
    gender : String
>>>>>>> main
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;