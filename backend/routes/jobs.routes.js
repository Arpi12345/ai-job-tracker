const express = require("express");
const router = express.Router();
const { fetchJobs } = require("../services/jobProvider");

router.get("/", async (req, res) => {
  try {
    const jobs = await fetchJobs();

    if (!jobs || jobs.length === 0) {
      return res.status(200).json([]);
    }

    res.json(jobs);
  } catch (error) {
    console.error("Job fetch failed:", error.message);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});


module.exports = router;
