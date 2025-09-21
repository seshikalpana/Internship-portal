const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: String,
  description: String,
  requiredSkills: [String],
  location: String,
  stipend: String
});

module.exports = mongoose.model("Job", jobSchema);
