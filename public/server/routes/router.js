const express = require('express');
const User = require('../model/model.js')
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');
const mongoose = require("mongoose");
const {add_user} = require("../services/render");
const axios = require("axios");
const {render} = require("ejs");
const {errors} = require("passport-local-mongoose");

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 *  @description for main admin page
 *  @method GET /admin
 */
route.get('/admin', services.admin)

/**
 *  @description for index page
 *  @method GET /index
 */
route.get('/index', services.index)

const  credential = {
    email : "admin@gmail.com",
    password : "admin123"
}

// START OF LOGIN BLOCK //

/**
 *  @description for login page
 *  @method path /login
 */
route.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email }).lean()

    if (!user) {
        return res.json({ status: 'error', error: 'Invalid email/password' })
    }

    if (await password == user.password) {
        // the email and password combination is successful
            // login redirect for admins
        if (user.privilege == "Admin") {
            return res.redirect('/index');
            // login redirect for employers
        } else if (user.privilege == "Employer") {
            return res.redirect('/postJob');
            // login redirect for students
        } else if (user.privilege == "User") {
            return res.redirect('/welcomePage');
        }
    }

    res.json({ status: 'error', error: 'Invalid email/password' })
})

// END OF LOGIN BLOCK //

/**
 *  @description for registration page
 *  @method GET /register
 */
route.get('/register', services.register)

/**
 *  @description for dashboard page
 *  @method GET /dashboard
 */
route.get('/dashboard', services.dashboard)

/**
 *  @description for logout
 *  @method GET /logout
 */
route.get('/logout', services.logout)

/**
 *  @description for landing page
 *  @method GET /landingPage
 */
route.get('/landingPage', services.landingPage)

/**
 *  @description for login page
 *  @method GET /base
 */
route.get('/base', services.base)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)

/**
 *  @description for contact us page
 *  @method GET /contact
 */
route.get('/contact', services.contact)

/**
 *  @description for student welcome page
 *  @method GET /welcomePage
 */
route.get('/welcomePage', services.welcomePage)

/**
 *  @description for user profile page
 *  @method GET /profile
 */
route.get('/profile', services.profile)

/**
 *  @description for job posting page for employers
 *  @method GET /postJob
 */
route.get('/postJob', services.postJob)


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route