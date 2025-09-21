const Resume = require("../models/Resume");
const Job = require("../models/Job");

exports.matchResumes = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const resumes = await Resume.find();
    const matched = resumes.filter(resume =>
      resume.skills.some(skill => job.requiredSkills.includes(skill))
    );

    res.json(matched);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
