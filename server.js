const dotenv = require("dotenv");
dotenv.config(); // Load .env at the very top

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err.message);
    process.exit(1);
  }
};
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Placeholder routes
app.use("/api/resumes", require("./routes/resumeRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));
app.use("/api/match", require("./routes/matchRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
