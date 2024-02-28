const express = require('express');

const router = express.Router();

const passport = require('passport');

const user_controllers = require('../controllers/user_controllers');

const student_portal_controller = require('../controllers/student_portal_controller');

const company_data_controller = require('../controllers/companyDataController');

router.post('/login', passport.authenticate('local', { session: false }),user_controllers.signIn);

router.get("/overview",student_portal_controller.overview);

router.post('/logout',passport.authenticate('jwt',{ session:false }),user_controllers.signout);

router.post('/company_data/add_company', company_data_controller.addCompanyData);

router.get('/company_data/oncampuss',company_data_controller.oncampusscampanies);

module.exports = router;