const express = require('express')
<<<<<<< HEAD
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
=======
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const session = require("express-session");
// const { v4: uuidv4 } = require("uuid");
>>>>>>> main

const connectDB = require('./public/server/database/connection');

<<<<<<< HEAD
// Use the session middleware
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));

app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})
=======
const app = express()
>>>>>>> main

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 5000

<<<<<<< HEAD
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
=======
// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();
>>>>>>> main

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

<<<<<<< HEAD
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
    
        res.redirect("/welcomePage.html");
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
=======
// set view engine
app.set("view engine", "ejs")

// load assets
app.use('/css', express.static(path.resolve(__dirname, "./public/stylesheets")))
app.use('/img', express.static(path.resolve(__dirname, "./public/images")))
app.use('/js', express.static(path.resolve(__dirname, "./public/js")))

// app.use(session({
//     secret: uuidv4(), //  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
//     resave: false,
//     saveUninitialized: true
// }));

// load routers
app.use('/', require('./public/server/routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
>>>>>>> main
