const express = require('express')
const app = express()
const https = require('https');
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
    extended: true
}));

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://COMP2800PROJECT:COMP2800@cluster0.rnbqx.mongodb.net/Project2800?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    user: String
});

const unicornModel = mongoose.model("users", userSchema);

var session = require('express-session')

app.set('view engine', 'ejs')

// Use the session middleware
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));

// users = {
//     "user1": "pass1",
//     "user2": "pass2",
// }


app.listen(5000, function (err) {
    if (err) console.log(err);
})

app.get('/', function (req, res) {
    if (req.session.authenticated)
        res.send(`Hi ${req.session.user} !`)
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

    unicornModel.find({ user: `${username}` }, function (err, results) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + results);
        }
        res.send(results);
    });


    // if (users[req.params.user] == req.params.pass) {
    //     req.session.authenticated = true
    //     req.session.user = req.params.user
    //     // res.send(`Successful Login! Welcome, ${req.session.user}`);
    //     // res.render("profile.ejs", {

    //     res.redirect('/login_success.html')

    //     //     "id": req.params.user,
    //     // });

    // } else {
    //     req.session.authenticated = false
    //     res.send("Failed Login!")
    // }

})

app.use(express.static('public'));
