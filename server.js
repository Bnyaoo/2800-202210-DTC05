const express = require('express')
const app = express()
const https = require('https');
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
    extended: true
}));

current_user = ""

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://COMP2800PROJECT:COMP2800@cluster0.rnbqx.mongodb.net/Project2800?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    user: String,
    password: String,
    test: String
});

const unicornModel = mongoose.model("users", userSchema);

var session = require('express-session')

app.set('view engine', 'ejs')

// Use the session middleware
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));

app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})


// app.listen(5000, function (err) {
//     if (err) console.log(err);
// })

app.get('/', function (req, res) {
    if (req.session.authenticated)
        res.redirect("/welcomePage.html")
    else {
        res.redirect('/landing_Page.html')
    }
})

app.get('/login/', function (req, res, next) {
    // console.log(req.body.email)
    res.send("Please Login through the URL")
})

app.get('/login/:user/:pass', function (req, res, next) {
    console.log(req.params.user);
    username = req.params.user;
    console.log(req.params.pass);
    password = req.params.pass;
    // res.send("HI");

    unicornModel.find({$and: [{ user: `${username}` },{password: `${password}`}]}, function (err, results) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + results);
        }

        if(results == ""){
            req.session.authenticated = false
            res.send("No user detected")
        }
        else{
        req.session.authenticated = true
        req.session.user = req.params.user
        current_user = req.params.user
    
        res.redirect("/profile.html");
    }   
    });
})

app.get('/profileUpdateSuccess', function (req, res, next) {
    console.log(current_user);


    unicornModel.updateOne({user: current_user}, {$set: {test:"notSuccess"}},
    function (err, data){
        if (err){
            console.log("Error" + err);
        }else{
            console.log("Data" + data)
        }
        res.send("Profile Succesfully Updated")
    });
})


app.use(express.static('public'));
