const express = require('express');

const router = express.Router();

const student_portal_controller = require('../controllers/student_portal_controller');

router.get("/overview",student_portal_controller.overview);

module.exports = router;