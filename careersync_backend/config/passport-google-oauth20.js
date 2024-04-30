const passport = require('passport');

const config = require('./config.js');

const cryptojs = require('crypto-js');
const User = require('../model/student_user.js');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: config.google_client_id,
  clientSecret: config.google_clientSecret,
  callbackURL: config.google_callbackUrl,
  
}, async function (accessToken, refreshToken, profile, cb) {
  console.log(accessToken, refreshToken);
  let user = await User.findOne({ email: profile.emails[0].value });
  if (!user) {
    user = await User.create({
      name: profile.displayName,
      email: profile.emails[0].value,
      avatar: profile.photos[0].value,
      password: cryptojs.SHA256(profile.id).toString(),
      gmail_fetch_creds: {
        accessToken,
        refreshToken
      }
    });

    console.log(user);
    return cb(null, user);
  }
  return cb(null, user);
}
));

module.exports = passport;