const express = require('express');
const listMessages = require('../controllers/google_fetcher');
const tpoController = require('../controllers/tpoController');
const router = express.Router();

router.get('/fetch_emails/:token', listMessages);

router.post('/google-login',tpoController.tpoLogin);

router.get('/checkLogin/:token', tpoController.checkLoginTpo);

router.post('/tpoLogOut/:token',tpoController.tpologout);

module.exports = router;