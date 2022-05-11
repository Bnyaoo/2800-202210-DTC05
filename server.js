const express = require('express')
const app = express()

var session = require('express-session')

app.set('view engine', 'ejs')

// Use the session middleware
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));

users = {
    "user1": "pass1",
    "user2": "pass2",
}


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
    if (users[req.params.user] == req.params.pass) {
        req.session.authenticated = true
        req.session.user = req.params.user
        // res.send(`Successful Login! Welcome, ${req.session.user}`);
        // res.render("profile.ejs", {
        res.redirect('/login_success.html')

        //     "id": req.params.user,
        // });

    } else {
        req.session.authenticated = false
        res.send("Failed Login!")
    }

})

app.use(express.static('public'));
