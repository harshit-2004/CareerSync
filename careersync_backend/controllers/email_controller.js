const mongoose = require('mongoose')
const User = require('../model/user');
const { authenticate } = require('passport');

const email_data_controller = async (req, res) => {
    const data = req.body;

    try{
        const email = data.email;
        const password = data.password;
        const user = await User.findOne({user:data.email});
        if(email===user.email&&password===user.password){
            console.log("user is authenticated");
        }else{
            console.log("user is not authenticated");
        }
        
    }
    catch(err){
        console.log(err);
    }
}

module.exports = email_data_controller;