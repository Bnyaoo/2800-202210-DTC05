const express = require('express')
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const session = require("express-session");
// const { v4: uuidv4 } = require("uuid");

const connectDB = require('./public/server/database/connection');
const app = express()

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 5000

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

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