const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  skills: [String],
  education: String,
  experience: String,
  resumeFile: String // path to uploaded PDF
});

module.exports = mongoose.model("Resume", resumeSchema);
