const axios = require('axios');
const Listing = require('../model/listing');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:5000/api/users')
        .then(function(response){
            res.render('base', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:5000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.admin = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:5000/api/users')
        .then(function(response){
            res.render('admin', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.index = (req, res) => {
    res.render('index', {});
}

exports.register = (req, res) => {
    axios.get('http://localhost:5000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("register", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.landingPage = (req, res) => {
    res.render('landingPage', {});
}

exports.base = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:5000/api/users')
        .then(function(response){
            res.render('base', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.dashboard = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:5000/api/users')
        .then(function(response){
            res.render('dashboard', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.logout = (req ,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('base', { title: "Express", logout : "logout Successfully...!"})
        }
    })
}

exports.contact = (req ,res)=> {
    res.render('contact', {})
}

exports.welcomePage = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:5000/api/users')
        .then(function(response){
            res.render('welcomePage', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.profile = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:5000/api/users')
        .then(function(response){
            res.render('profile', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.postJob = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:5000/api/users')
        .then(function(response){
            res.render('postJob', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

// ADMIN JOB LISTINGS START //

exports.getListingForm = (req, res, next) => {
    res.render('add-listing', { name: 'Benny Chao', path: '/add-listing', pageTitle: 'Add Listing' });
}

exports.postListing = (req, res, next) => {
    const prod = new Listing({
        title: req.body.title,
        imageURL: req.body.imageURL,
        pay: req.body.pay,
        description: req.body.description
    });
    prod.save()
        .then(result => {
            res.redirect('/listings');
        }).catch(err => console.log(err));


}

exports.editListingPage = (req, res, next) => {
    Listing.findById(req.params.prodId)
        .then(listing => {
            res.render('edit-listing', { listing: listing, path: '/', pageTitle: 'Edit Listing', name: 'Benny Chao' });
        }).catch(err => console.log(err));

}

exports.editListingPost = (req, res, next) => {

    Listing.updateOne({ _id: req.body.id }, { $set: { title: req.body.title, imageURL: req.body.imageURL, price: req.body.price, description: req.body.description } })
        .then(result => {
            res.redirect('/listings/' + req.body.id);
        })
        .catch(err => console.log(err));

}

exports.deleteListing = (req, res, next) => {

    // Listing.deleteOne({ _id: req.body.id }) //deleteOne mongodb
    // Listing.findByIdAndDelete(req.body.id) //findOneAndDelete
    Listing.findByIdAndRemove(req.body.id) //findAndModify
        .then(result => {
            res.redirect('/listings');
        })
        .catch(err => console.log(err));

}

// ADMIN JOB LISTINGS END //

// SHOP JOB LISTINGS CART START //

// const newUser = new User({
//     name: req.user.name,
//     email: req.user.email,
//     password: req.user.password,
//     privilege: req.user.privilege,
//     gender: req.user.gender
// });

exports.getAllListings = (req, res, next) => {
    Listing.find()
        .then(listings => {
            res.render('listings', { name: 'Student Smith', prods: listings, path: '/', pageTitle: 'Home' });
        })
        .catch(err => console.log(err));
};

exports.getListingDetail = (req, res, next) => {
    Listing.findById(req.params.prodId)
        .then(listing => {
            res.render('listing-detail', { prod: listing, pageTitle: 'Listing Detail', path: '/', name: 'Fucker Jones' });
        })
        .catch(err => console.log(err));
}

exports.addToCart = (req, res, next) => {
    req.user.addToCart(req.body.id)
        .then(() => {
            res.redirect('/cart');
        }).catch(err => console.log(err));
}

exports.getCart = (req, res, next) => {
    req.user
        .populate('cart.items.listingId')
        .execPopulate()
        .then(user => {
            console.log(user);
            res.render('/cart', { cart: user.cart, pageTitle: 'Ongoing Job Applications', path: '/cart', name: 'Student Smith' });
        })
        .catch(err => console.log(err));
}

exports.deleteInCart = (req, res, next) => {
    req.user.removeFromCart(req.body.prodId)
        .then(() => {
            res.redirect('/cart');
        }).catch(err => console.log(err));

}

// SHOP JOB LISTINGS CART END //
