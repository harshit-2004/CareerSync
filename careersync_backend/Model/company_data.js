const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
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
  month: {
    type: String,
  },
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "branch",
  },
  email: {
    type: String,
  },
},
{
  timestamps: true,
});

const Company = mongoose.model("Company", companySchema);
module.exports = Company;