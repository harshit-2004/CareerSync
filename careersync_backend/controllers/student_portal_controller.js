const Student_portal = require('../model/student_portal_home');

module.exports.overview = function(req, res) {
    // Find all overviews in the Student_portal model
    Student_portal.find()
        .then(overviews => {
            // Send the overviews as a response
            res.status(200).json({ data : overviews });
        })
        .catch(err => {
            // Handle error
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        });
};
