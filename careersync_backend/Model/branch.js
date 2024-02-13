const mongoose = require("mongoose");

const branchModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
});

const Branch = mongoose.model("Branch", branchModel);
module.exports = Branch;
