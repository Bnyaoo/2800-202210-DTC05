const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
mongoose.set('useCreateIndex', true);

//false: querystring
//true: qs
app.use(bodyParser.urlencoded({ extended: true }));
//http://localhost:3000/css/main.css
app.use(express.static(path.join(__dirname, 'public')));
//http://localhost:3000/abc => package till public
// http://localhost:3000/abc/css/main.css 
// app.use('/abc', express.static(path.join(__dirname, 'public')));
//http://localhost:3000/abc => css folder
//http://localhost:3000/abc/main.css
// app.use('/abc', express.static(path.join(__dirname, 'public', 'css')));

app.use((req, res, next) => {
    User.findById('628d5e00bd6a73425012acea')
        .then(userInDB => {
            req.user = userInDB;
            next();
        })
        .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(userRoutes);
app.use( require('./routes/router'));
app.use('/css', express.static(path.resolve(__dirname, "./public/css")));
app.use('/img', express.static(path.resolve(__dirname, "./public/images")));

app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});

// app.use((err, req, res, next) => {
//     res.status(500).send('Something Broke!');
// });
mongoose.connect('mongodb+srv://admin:admin123@cluster0.12jcp.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(5000, () => {
            console.log('Server is running on 5000');
        });
    })
    .catch(err => console.log(err));