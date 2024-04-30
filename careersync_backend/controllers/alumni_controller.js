const Alumini = require('../model/alumni.js');

module.exports.alumni_detail = async function(req, res) {
    let pageNumber = parseInt(req.params.currentPage);
    let pageSize = 10; // Assuming a default page size of 10

    try {
        const totalAlumniCount = await Alumini.countDocuments();
        const totalPages = Math.ceil(totalAlumniCount / pageSize);

        // Adjust pageNumber if requested page is greater than total pages
        if (pageNumber >= totalPages) {
            pageNumber = totalPages > 0 ? totalPages - 1 : 0;
        }

        const alumniData = await Alumini.find().skip(pageNumber * pageSize).limit(pageSize);
        return res.status(200).json({ details: alumniData, totalPages });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error fetching alumni data" });
    }
}

module.exports.updateProfile = async function(req, res) {
    const updates = req.body; // Assuming req.body contains the updates
    console.log("alumni updated data ",updates,updates._id);
    try {
        const updatedAlumni = await Alumini.findByIdAndUpdate(updates._id, updates, { new: true });

        if (!updatedAlumni) {
            return res.status(404).json({ message: "Alumni not found" });
        }

        return res.status(200).json({ updatedAlumni });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error updating alumni profile" });
    }
}
