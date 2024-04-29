const express = require('express');
const router = express.Router();
const passport = require("passport")
const userController = require("../controllers/user_controllers")

router.get('/auth/google',passport.authenticate('google', { session: false ,scope:['profile','email'] }));

router.get('/auth/google/callback',passport.authenticate('google', {failureRedirect: "http://localhost:3000/student_portal/login",session:false}),userController.signIn);

router.use('/student_portal',require('./student_portal'));

router.get('/checkLogin/:token',userController.checkerFirstPreviousLoggedIn );

// router.use('/tpo',require('./tpo'));

module.exports = router;