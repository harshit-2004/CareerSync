const fs = require('fs');
const jwt = require('jsonwebtoken');
const config = require("../config/config");
const passport = require('passport');

const path = require('path');
const User = require('../model/student_user');

module.exports.signIn = async function(req, res, info) {
    console.log("signIn");
    const user = req.user;
    if (!user) {
        return res.status(400).json({
            message: info ? info.message : 'Login failed',
            user: user
        });
    }
    req.login(user, { session: false }, async (err) => {
        if (err) {
            return res.status(500).send(err);
        }

        const userDetail = {
            id: user.id,
            email: user.email,
            name: user.name
        };

        const token = jwt.sign({ userDetail: userDetail }, config.passport_jwt);

        try {
            const userDocument = await User.findById(user.id);
            if (userDocument) {
                userDocument.token = token;
                await userDocument.save();
            }
        } catch (error) {
            console.error("Error occurred while updating user token:", error);
            return res.status(500).json({ message: "Error occurred while updating user token" });
        }
        res.cookie('jwt', token, {
            httpOnly: true,
            sameSite: true,
            signed: true,
            secure: true,
            session:false
        });
        // return res.status(200).json({ userDetail, token });
        return res.redirect("http://localhost:3000/student_portal");
    });
};


module.exports.signout= async function(req,res){
    console.log("logged out successfully");
    try {
        const userDocument = await User.findById(req.user.id);
        if (userDocument) {
            userDocument.token = "";
            await userDocument.save();
        }
    } catch (error) {
        console.error("Error occurred while updating user token:", error);
        return res.status(500).json({ message: "Error occurred while updating user token" });
    }
    res.clearCookie("jwt");
    return res.status(200).json({message:"Logged out successfully"});
}

module.exports.checker = function(req,res,next){
    
    console.log("req user ",req.user);
    if(req.user){
        next();
    }else{

    }
}