const mongoose = require("mongoose");
const { Link } = require("react-router-dom");
const { link } = require("../routes");

const companySchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  info:{
    type:String,
  },
  type:{
    type:String,
    required:true,
  },
  oncampuss:{
    type:Boolean,
    required:true
  },
  package: {
    type: String,
    required: true,
  },
  year: [
    {
      type: Number,
    },
  ],
  last_date:{
    type : Date
  }
  ,
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "branch",
  },
  email: {
    type: String,
  },
  apply_link:{
    type:String
  }
},
{
  timestamps: true,
});

const Company = mongoose.model("Company", companySchema);
module.exports = Company;