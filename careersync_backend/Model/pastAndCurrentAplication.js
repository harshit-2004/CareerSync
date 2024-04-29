const mongoose = require("mongoose");

const pastAndCurrentAplication = new mongoose.Schema({
    startingDate:{
        type:String
    },
    endingDate:{
        type:String
    },
    accepted:{
        type:Boolean
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"student_user"
    },
})

const pastAndCurrentAplications = mongoose.model("Past and Current Application",pastAndCurrentAplication);

module.exports = pastAndCurrentAplications;