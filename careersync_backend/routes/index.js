const express = require('express');

const router = express.Router();

const branch = require('../model/branch');
const passport = require("passport")
const userController = require("../controllers/user_controllers")

router.get('/auth/google',passport.authenticate('google', { session: false ,scope:['profile','email'] }));

router.get('/auth/google/callback',passport.authenticate('google', {failureRedirect: "http://localhost:3000/login",failureMessage:true}),userController.createSession);

// const email_data_controller = require('../controllers/user_controllers');
// router.get('/login', () => {})
router.post('/login',passport.authenticate('local', {failureRedirect: "http://localhost:3000/login",failureMessage:true}), userController.createSession);

const company_data_controller = require("../controllers/companyDataController");

router.use('/student_portal',require('./student_portal'));

router.post('/company_data/add_company', company_data_controller.addCompanyData);

router.get('/company_data/oncampuss',company_data_controller.oncampusscampanies)

module.exports = router;