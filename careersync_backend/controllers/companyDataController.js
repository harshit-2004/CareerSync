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
    const data = await CompanyData.find();
    console.log(data);
    return res.status(200).json({
        data
    });
  }