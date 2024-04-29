const mongoose = require("mongoose");

const student_portal_home = new mongoose.Schema({
    image:{
        type:String
    },
    info:{
        type:String
    },
    name:{
        type:String,
    },
    percentage:{
        type:String
    }
})

const student_portal = mongoose.model("Student portal home",student_portal_home);

module.exports = student_portal;