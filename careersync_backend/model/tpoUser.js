
const mongoose = require("mongoose");

const tpoUserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required:true,
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

const tpoUser = mongoose.model("tpoUser", tpoUserSchema);

module.exports = tpoUser;