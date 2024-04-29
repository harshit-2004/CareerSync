const Student_portal = require('../model/student_portal_home');

module.exports.overview = async function(req, res) {
    const student_data = await Student_portal.find();
    res.status(200).json({student_data:student_data});
};
