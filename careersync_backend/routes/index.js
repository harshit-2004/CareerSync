const express = require('express');

const router = express.Router();

const branch = require('../model/branch');

const company_data = require('../model/company_data');
const passport = require("passport")
const userController = require("../controllers/user_controllers")

// const User = require('../model/user');

router.post('/auth/google',passport.authenticate('jwt', { session: false }),  );

router.get('/auth/google/callback',passport.authenticate('jwt',{session:false}),  );

const email_data_controller = require('../controllers/user_controllers');

const company_data_controller = require("../controllers/companyDataController");

router.post('/company_data', company_data_controller)

// router.get('/email_data',email_data_controller);

module.exports = router;