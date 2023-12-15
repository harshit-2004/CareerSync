const express = require('express');
const router = express.Router()

const company_data_controller = require("../controllers/companyDataController");

router.post('/company_data', company_data_controller)

module.exports = router; 