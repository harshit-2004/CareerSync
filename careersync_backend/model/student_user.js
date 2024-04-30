const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required:true,
    },
    avatar: {
      type: String,
      required:true,
    },
    placement:{
        type:String,
    },
    internship:{
        type:String,
    },
    branch:{
      type:mongoose.Schema.ObjectId,
      ref:"branch"
    },
    token:{
        type:String,
        timestamps:true,
        unique:true
    },
    gmail_fetch_creds: {
      refreshToken: String,
      accessToken: String
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;