const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  try {
    const job = new Job({
      title: req.body.title,
      company: req.body.company,
      description: req.body.description,
      requiredSkills: req.body.requiredSkills.split(","),
      location: req.body.location,
      stipend: req.body.stipend
    });
    await job.save();
    res.status(201).json({ message: "Job posted", job });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
