const mongoose = require("mongoose");

const student_portal_home = new mongoose.Schema({
    overview:{
        placement:{
            name:{
                type:String
            },
            percentage:{
                type:Number
            },
            info:{
                type:String
            },
            image:{
                type:String
            }
        },
        highest_packages:{
            name:{
                type:String
            },
            percentage:{
                type:Number
            },
            info:{
                type:String
            },
            image:{
                type:String
            }
        },
        total_intern_hired:{
            name:{
                type:String
            },
            percentage:{
                type:Number
            },
            info:{
                type:String
            },
            image:{
                type:String
            }
        }
    },
    // analytics:{
        
    // },
})

const student_portal = mongoose.model("Student portal home",student_portal_home);

module.exports = student_portal;