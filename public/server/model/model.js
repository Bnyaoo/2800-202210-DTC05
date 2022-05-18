const mongoose = require('mongoose');
<<<<<<< HEAD

var schema = new mongoose.Schema({
=======
const Listing = require('../model/listing');

const schema = new mongoose.Schema({
>>>>>>> main
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
<<<<<<< HEAD
    gender : String,
    status : String
=======
=======
>>>>>>> main
    password : {
        type: String,
        required: true
    },
    privilege : {
        type: String,
        required: true
    },
<<<<<<< HEAD
    gender : String
>>>>>>> main
})

const Userdb = mongoose.model('userdb', schema);

=======
    gender : String,
    cart: {
        items: [{
            listingId: {
                type: mongoose.Types.ObjectId,
                ref: 'Listing',
                required: true
            },
            qty: {
                type: Number,
                required: true
            }
        }],
        pay: Number,
    }
});

// Adding a job to "cart"
schema.methods.addToCart = async function(listingId) {
    const listing = await Listing.findById(listingId);
    if (listing) {
        const cart = this.cart;
        const isExisting = cart.items.findIndex(objInItems => new String(objInItems.listingId).trim() === new String(listing._id).trim());
        if (isExisting >= 0) {
            cart.items[isExisting].qty += 1;
        } else {
            cart.items.push({ listingId: listing._id, qty: 1 });
        }
        if (!cart.totalPay) {
            cart.totalPay = 0;
        }
        cart.totalPay += listing.pay;
        return this.save();
    }

};

// Deleting a job from "cart"
schema.methods.removeFromCart = function(listingId) {
    const listing = this.cart;
    const isExisting = listing.items.findIndex(objInItems => new String(objInItems.listingId).trim() === new String(listingId).trim());
    if (isExisting >= 0) {
        listing.items.splice(isExisting, 1);
        return this.save();
    }
}

const Userdb = mongoose.model('userdb', schema);

// model name: 'userdb' will be used to turn into a collection name in DB
// 'userdb' => 'userdb' + 's' => userdbs
>>>>>>> main
module.exports = Userdb;