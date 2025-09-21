const express = require("express");
const router = express.Router();
const { matchResumes } = require("../controllers/matchController");

router.get("/:jobId", matchResumes);

module.exports = router;
