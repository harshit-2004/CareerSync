const User = require('../model/user');

const fs = require('fs');

const path = require('path');

// module.exports.login = (req, res) => {
//     console.log("hit", req.body);
//     if(req.isAuthenticated())
//     {
//       return res.redirect("http://localhost:3000/student-portal", {
//         status:200
//       });
//     }
//     return res.redirect("http://localhost:3000/main-login", {
//       status:200
//     });
// }

module.exports.createSession = function(req, res){
  console.log("hello inside create session logged in successfully");
    return res.redirect("http://localhost:3000/student-portal/");
  }

module.exports.signout= function(req,res){
    console.log("logged out successfully");
    req.logout(function(err){
        if(err){
            console.log("error in making value ",err);
            return next(err);
        }
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
        return res.redirect('back');
      } catch (error) {
        console.error(error);
        return res.redirect('back');
      }
}