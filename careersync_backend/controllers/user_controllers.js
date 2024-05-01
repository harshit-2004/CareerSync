const fs = require('fs');
const jwt = require('jsonwebtoken');
const config = require("../config/config");
const passport = require('passport');

const path = require('path');
const User = require('../model/student_user');
const { CLIENT_URL } = require('../config/config');

module.exports.signIn = async function(req, res, info) {
    console.log("signIn");
    // req.locals.user = req.user;
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
            httpOnly: false,
            sameSite: false,
            secure: true,
            session: false
        });
        // return res.status(200).json({ userDetail, token });
        return res.status(200).redirect(`${CLIENT_URL}/student_portal`)
    });
};


module.exports.signout= async function(req,res){
    console.log("logged out successfully");
    const token = req.params.token;

    const userDetails = jwt.decode(token, config.passport_jwt);
    console.log(userDetails);

    try {
        if(!userDetails.userDetail.id){
            return res.status(401).send({message: "Heya!"});
        }
        const userDocument = await User.findById(userDetails.userDetail.id);
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

module.exports.checkerFirstPreviousLoggedIn = async function(req,res){
    const token = req.params.token;

    console.log(token);

    try{
        const ret = jwt.verify(token, config.passport_jwt);
        console.log(ret);
        return res.status(200).json({message :"Previous Signed IN"});
    }
    catch(err){
        return res.status(401).json({message:"Please login"});
    }
}