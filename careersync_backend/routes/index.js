const express = require('express');
const router = express.Router();
const passport = require("passport")
const userController = require("../controllers/user_controllers")

router.get('/auth/google', passport.authenticate('google', { session: false, scope: ['profile', 'email', 'https://www.googleapis.com/auth/gmail.addons.current.message.readonly','https://www.googleapis.com/auth/gmail.readonly','https://mail.google.com/'	, 'https://www.googleapis.com/auth/gmail.labels'], prompt: 'consent', accessType: 'offline' }));
router.use('/tpo', require('./tpo'));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: "http://localhost:3000/student_portal/login", session: false }), userController.signIn);

router.use('/student_portal', require('./student_portal'));

router.get('/checkLogin/:token', userController.checkerFirstPreviousLoggedIn);

router.use('/alumni', require('./alumni'));

module.exports = router;