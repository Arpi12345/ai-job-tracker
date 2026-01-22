import { useState, useEffect } from "react";
import api from "../services/api";
import ResumeUpload from "../components/ResumeUpload";
import AISidebar from "../components/AISidebar";


function JobFeed() {
const [jobs, setJobs] = useState([]);
const [resumeUploaded, setResumeUploaded] = useState(false);

const fetchJobs = async () => {
  const res = await api.get("/jobs");
  setJobs(res.data);
};

  return (
    <div>
      
   <ResumeUpload onUploadSuccess={() => {
  setResumeUploaded(true);
  fetchJobs();
}} />

      <h2>Job Feed</h2>
   




     {resumeUploaded && jobs.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p>{job.description}</p>
             <p>
  <strong>Why this job matched:</strong><br />
  <span style={{ color: "#555" }}>
    {job.matchReason}
  </span>
</p>
          {job.matchScore !== undefined && (
            <p>
              <strong>Match Score:</strong>{" "}
              <span
                style={{
                  color:
                    job.matchScore > 70
                      ? "green"
                      : job.matchScore > 40
                      ? "orange"
                      : "gray",
                }}
              >
                {job.matchScore}%
              </span>
            </p>
          )}
          <button onClick={() => window.open(job.applyUrl, "_blank")}>
            Apply
          </button>
        </div>
      ))}
   


<div style={{ display: "flex" }}>
  <div style={{ flex: 1, padding: "20px" }}>
    {/* Existing JobFeed + ResumeUpload code */}
  </div>

  <AISidebar jobs={jobs} />
</div>


    </div>
  )
}

export default JobFeed;
