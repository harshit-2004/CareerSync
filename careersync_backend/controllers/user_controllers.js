const User = require('../model/user');

const fs = require('fs');

const path = require('path');

const { log } = require('console');

module.exports.signin = function(req,res){
    req.flash('success','Sign In Successfully');
    return res.render('signin',{
        title:"From User controler"
    });
}

module.exports.signout= function(req,res){
    console.log("logged out successfully");
    req.logout(function(err){
        if(err){
            console.log("error in making value ",err);
            return next(err);
        }
        req.flash('success','Logged out Successfully');
        return res.redirect('/');
      });
}

module.exports.profile = function(req,res){
    return res.render('profile',{
        title:"From User controler"
    });
}

module.exports.profile_update = async function(req,res){
    try {
        let user = await User.findByIdAndUpdate(
          req.body.id,
          { name: req.body.name, email: req.body.email ,
            password:req.body.password
          }
        );
        user.save();
        req.flash('success', 'Profile Updated Successfully');
        if(req.xhr){
            return res.status(200).json({
                data:{
                    email:user.email
                },
                message:"Porfile Updated Successfully"
            });
        }
        req.flash('success', 'Profile Updated Successfully');
        return res.redirect('back');
      } catch (error) {
        console.error(error);
        req.flash('error', 'Error updating profile');
        return res.redirect('back');
      }
}