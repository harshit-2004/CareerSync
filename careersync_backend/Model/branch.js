const mongoose = require("mongoose");

const branchModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
    required: true,
  },
});

const Branch = mongoose.Model("Branch", branchModel);
module.exports = Branch;
