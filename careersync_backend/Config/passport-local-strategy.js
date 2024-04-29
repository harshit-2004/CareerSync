const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const JWTStrategy   = require('./passport-jwt').Strategy;

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

module.exports = passport;