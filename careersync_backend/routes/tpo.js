const express = require('express');
const listMessages = require('../controllers/google_fetcher');
const router = express.Router();

router.get('/fetch_emails/:token', listMessages);

module.exports = router;