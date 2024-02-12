const Student_portal = require('../model/student_portal_home');

module.exports.overview = function(req, res) {
    // Find all overviews in the Student_portal model
    Student_portal.find()
        .then(overviews => {
            // Send the overviews as a response
            console.log(overviews);
            if(!overviews.length){
                overviews = {
                  overview: {
                    placement: {
                      name: "Placements",
                      percentage: "98.6",
                      info: "+5% from last year",
                      image: "",
                    },
                    highest_packages: {
                      name: "Highest Package",
                      percentage: "48",
                      info: "32 LPA For 2022",
                      image: "",
                    },
                    total_intern_hired: {
                      name: "Total Intern Hired",
                      percentage: "42",
                      info: "20 more than last year",
                      image: "",
                    },
                  },
                };
            }
            res.status(200).json({ data : overviews });
        })
        .catch(err => {
            // Handle error
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        });
};
