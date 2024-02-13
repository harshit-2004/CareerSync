const mongoose = require('mongoose')
const CompanyData = require('../model/company_data');

module.exports.addCompanyData = async (req, res) => {
    const data = req.body;
    try{
        const newCompany = new CompanyData(data);
        console.log(newCompany);
    }
    catch(err){
        console.log(err);
    }
}

module.exports.oncampusscampanies = async function(req, res) {
    // campuss, btechyear, branch, type: internship, placement, internship+placement
    // console.log("showing the req.body", req.body);
    const data = await CompanyData.find({
        year: req.body.year,
        oncampuss:req.body.oncampuss,
        branch:req.body.branch,
        type:req.body.type
    });
    console.log("showing the requested data ", data);
    return res.json({
        data 
    });
  }