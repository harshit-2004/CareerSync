const passport = require('passport');

module.exports.checker = function(req,res,next){
    console.log("Middleware ",req.locals);
    // if(req.locals&&req.locals.user){
        next(); 
    // }else {
    //     return res.status(401).json({message:"Not authenticated"});
    // }
}