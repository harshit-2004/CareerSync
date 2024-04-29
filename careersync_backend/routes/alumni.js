const express = require('express');
const router = express.Router();
const alumni_controller = require('../controllers/alumni_controller');

router.get('/alumni_detail/:currentPage', alumni_controller.alumni_detail);
router.post('/update/:alminId', alumni_controller.updateProfile);

module.exports = router;
