const express = require('express');
const router = express.Router();
const passport = require("passport")
const userController = require("../controllers/user_controllers")
const company_data_controller = require("../controllers/companyDataController");

router.get('/auth/google',passport.authenticate('google', { session: false ,scope:['profile','email'] }));

router.get('/auth/google/callback',passport.authenticate('google', {failureRedirect: "http://localhost:3000/login",failureMessage:true}),userController.createSession);

router.post('/login',passport.authenticate('local', {failureRedirect: "http://localhost:3000/login",failureMessage:true}), userController.createSession);

router.get('/logout',userController.signout);

router.use('/student_portal',require('./student_portal'));

router.post('/company_data/add_company', company_data_controller.addCompanyData);

router.get('/company_data/oncampuss',company_data_controller.oncampusscampanies);

module.exports = router;