const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../model/student_user');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
async function (email, password, cb) {
    try {
        console.log("local strategy");
        const user = await User.findOne({email,password});
        if (!user) {
            console.log("Incorrect email or password.");
            return cb(null, false,{ message: 'Incorrect email or password.' });
        }else{
            return cb(null, user, {
                message: 'Logged In Successfully'
            });
        }
    } catch (error) {
        return cb(error);
    }
}
));

passport.checkAuthentication = function(req, res, next){
    //if the user is signed in, then pass on the request to the next function (controller's action)
    if (req.isAuthenticated()){
        return next ();
    }else{
        //  if the user is not signed in 
        return res.status(500).json({messages:"Please Log In"});
    }
}

module.exports = passport;