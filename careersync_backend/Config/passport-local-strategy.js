const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../model/user');

passport.use(new LocalStrategy({
    usernameField:'email'
},async function(email, password, done) {
    try{
        let user  = await User.findOne({ email: email });
  
        if (!user||password!== user.password) {
            console.log('Invalid Username/Password');
             return done(null, false); }
        else
        return done(null, user);
    }catch(err){
    console.log("Error in passport local strategy ");
    if (err) { return done(err); }
    }
}));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user.id);
    });
  });
  
passport.deserializeUser(async function(id, cb) {
    await User.findById(id).then(function(user) {
        return cb(null, user);
    }).catch(function(err) {
        console.log('Error in finding user --> Passport');
        return cb(err);
    });
  });
  
passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }else{
        return res.redirect('/');
    }
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated())
    {
        res.locals.user = req.user;
    }
    next();
}


module.exports = passport;