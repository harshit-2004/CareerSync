const express = require('express');
const router = express.Router();
const passport = require("passport")
const userController = require("../controllers/user_controllers")

router.get('/auth/google', passport.authenticate('google', { session: false, scope: ['profile', 'email'], prompt: 'consent', accessType: 'offline' }));
router.use('/tpo', require('./tpo'));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: "http://localhost:3000/student_portal/login", session: false }), userController.googlesignIn);

router.use('/student_portal', require('./student_portal'));

router.get('/checkLogin/:token', userController.checkerFirstPreviousLoggedIn);

router.use('/alumni', require('./alumni'));

module.exports = router;