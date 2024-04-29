const passport = require("passport");
const User = require("../model/student_user");

const config = require("./config");

var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
var opts = {};

var cookieExtractor = function(req) {
  var token = null;
  console.log("cookie extractor",req.signedCookies);
  if (req && req.signedCookies) {
      token = req.signedCookies['jwt'];
  }
  return token;
};

opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = config.passport_jwt;

passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
      console.log("jwt strategy",jwt_payload);
      let user = await User.findById(jwt_payload.userDetail.id);
      console.log(user);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Token expires" });
      }
    } catch (err) {
      console.log("Error in finding user for jwt ", err);
      return done(err);
    }
  })
);


module.exports = passport;