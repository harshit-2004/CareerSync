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

module.exports.oncampusscampanies = function(req,res){
    // campuss,btechyear,branch,type:internship,placement,internship+placement
        const data = CompanyData.find({oncampuss:req.body.campuss,
                                        $year: { $search: req.body.year },
                                        $branch: { $search: req.body.branch },
                                        type:req.body.type
                                    });
        console.log(data);
        return res.redirect('back',{
            campanies_data:data
        });
}