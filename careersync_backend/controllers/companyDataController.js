const mongoose = require('mongoose')
const CompanyData = require('../model/company_data');

const addCompanyData = async (req, res) => {
    const data = req.body;

    try{
        const newCompany = new CompanyData(data);
        console.log(newCompany);

    }
    catch(err){
        console.log(err);
    }
}

module.exports = addCompanyData