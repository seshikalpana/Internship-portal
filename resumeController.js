const Resume = require("../models/Resume");
const multer = require("multer");
const path = require("path");

// Setup file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

exports.uploadResume = [
  upload.single("resume"),
  async (req, res) => {
    try {
      const resume = new Resume({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        skills: req.body.skills.split(","),
        education: req.body.education,
        experience: req.body.experience,
        resumeFile: req.file.path
      });
      await resume.save();
      res.status(201).json({ message: "Resume uploaded", resume });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
];

exports.getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
