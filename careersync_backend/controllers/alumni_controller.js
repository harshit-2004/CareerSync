const Alumini = require('../model/alumni.js');

module.exports.alumniAdd = async function (req, res) {
    try {
        // Check if an alumni with the same email already exists
        const existingAlumni = await Alumini.findOne({ email: req.body.email });
        
        if (existingAlumni) {
            return res.status(400).json({ error: 'An alumni with this email already exists.' });
        }

        // Create a new alumni object
        const newAlumni = new Alumini({
            name: req.body.name,
            branch: req.body.branch,
            company: req.body.company,
            phone_no: req.body.phone_no,
            email: req.body.email,
            avatar: req.body.avatar,
            role: req.body.role,
            graduation_year: req.body.graduation_year,
            address: req.body.address,
            linkdin: req.body.linkdin,
        });

        // Save the new alumni to the database
        console.log("New alumni Added");
        const savedAlumni = await newAlumni.save();
        res.status(201).json(savedAlumni);
    } catch (error) {
        res.status(500).json({ error: 'Error adding alumni data' });
    }
};


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
