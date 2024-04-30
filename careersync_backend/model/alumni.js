const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const { Data } = require('victory');

const Alumni = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    company:{
        type:String,
        required : true,
    },
    phone_no:{
        type: Number,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    avatar:{
        type:String,
    },
    role:{
        type:String,
        unique:true,
    },
    branch:{
        type:String,
    },
    graduation_year:{
        type:Date,
        required:true
    },
    address :{
        type:String
    },
    linkdin:{
        type:String
    },
  },
  {
    timestamps: true,
  });
  
  const AlumniModel = mongoose.model("Alumni", Alumni);
  module.exports = AlumniModel;