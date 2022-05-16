const axios = require('axios');


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