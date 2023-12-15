const passport = require('passport');
const User = require('../model/user');

const config = require('./config');

var JwtStrategy = require('passport-jwt').Strategy, ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.passport_jwt;


passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {

    try{
        let user = await User.findById(jwt_payload._id);
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
    }catch(err){
        console.log("Error in finding user for jwt ", err);
        return;
    }
        
}));