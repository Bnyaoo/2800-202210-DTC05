const express = require('express');
const User = require('../models/user');

const route = express.Router()

const services = require('../services/render');
const controller = require('../controllers/controller');
const mongoose = require("mongoose");
const {
    add_user
} = require("../services/render");
const axios = require("axios");
const {
    render
} = require("ejs");
const {
    errors
} = require("passport-local-mongoose");

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
 *  @description for employer home page
 *  @method GET /employerHome
 */
route.get('/employerHome', services.employerHome)

// /**
//  *  @description for index page
//  *  @method GET /index
//  */
// route.get('/index', services.index)

// START OF LOGIN BLOCK //

/**
 *  @description for login page
 *  @method path /login
 */
route.post('/login', async (req, res) => {
    const {
        email,
        password
    } = req.body
    const userSchema = await User.findOne({
        email
    }).lean()

    if (!userSchema) {
        return res.json({
            status: 'error',
            error: 'Invalid email/password'
        })
    }

    if (await password == userSchema.password) {
        // the email and password combination is successful
        // login redirect for admins
        if (userSchema.privilege == "Admin") {
            return res.redirect('/adminHome');
            // login redirect for employers
        } else if (userSchema.privilege == "Employer") {
            return res.redirect('/employerHome');
            // login redirect for students
        } else if (userSchema.privilege == "Student") {
            return res.redirect('/all-products');
        }
    }

    res.json({
        status: 'error',
        error: 'Invalid email/password'
    })
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
 *  @method GET /studentContact
 */
route.get('/studentContact', services.studentContact)

/**
 *  @description for contact us page
 *  @method GET /employerContact
 */
route.get('/employerContact', services.employerContact)

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
 *  @description for user profile page
 *  @method GET /profile
 */
route.get('/profile1', services.profile1)

/**
 *  @description for user profile page
 *  @method GET /profile
 */
route.get('/profile2', services.profile2)

/**
 *  @description for user profile page
 *  @method GET /profile
 */
route.get('/profile3', services.profile3)

/**
 *  @description for confirmation page
 *  @method GET /success
 */
route.get('/success', services.success)

/**
 *  @description for resume page
 *  @method GET /success
 */
route.get('/resume', services.resume)

/**
 *  @description for cover letter page
 *  @method GET /success
 */
route.get('/coverLetter', services.coverLetter)

/**
 *  @description for job posting page for employers
 *  @method GET /postJob
 */
route.get('/postJob', services.postJob)

/**
 *  @description for admin homepage
 *  @method GET /adminHome
 */
route.get('/adminHome', services.adminHome)

/**
 *  @description for admin index page
 *  @method GET /adminIndex
 */
route.get('/adminIndex', services.adminIndex)

// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route