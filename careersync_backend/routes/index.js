const express = require('express');

const router = express.Router();

const branch = require('../model/branch');

const company_data = require('../model/company_data');
const passport = require("passport")
const userController = require("../controllers/user_controllers")

router.get('/auth/google',passport.authenticate('google', { session: false ,scope:['profile','email'] }));

router.get('/auth/google/callback',passport.authenticate('google',{session:false,successRedirect:'/',failureRedirect:'/login'}));

// const email_data_controller = require('../controllers/user_controllers');

const company_data_controller = require("../controllers/companyDataController");

router.post('/company_data', company_data_controller)

module.exports = router;