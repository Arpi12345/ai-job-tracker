const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();


app.use(cors());
app.use(express.json());
const jobRoutes = require("./routes/jobs.routes");
app.use("/jobs", jobRoutes);
app.get("/", (req, res) =>{
    res.send("AI Job Tracker Backend Running");
});
const resumeRoutes = require("./routes/resume.routes");
app.use("/resume", resumeRoutes);

const PORT = process.env.PORT || 5000;

app.listen( PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});