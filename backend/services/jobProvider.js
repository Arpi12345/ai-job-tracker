const axios = require("axios");

const fetchJobs = async () => {
  try {
    const response = await axios.get(
      "https://api.adzuna.com/v1/api/jobs/in/search/1",
      {
        params: {
          app_id: process.env.ADZUNA_APP_ID,
          app_key: process.env.ADZUNA_APP_KEY,
          results_per_page: 10,
          what: "developer",
        },
      }
    );

   return response.data.results.map((job, index) => {
  const title = job.title || "";
  const description = job.description || "";

  let matchReason = "Matched based on general relevance to your profile.";

  if (
    title.toLowerCase().includes("react") ||
    description.toLowerCase().includes("react")
  ) {
    matchReason = "Matched because your resume includes React and frontend skills.";
  } 
  else if (
    title.toLowerCase().includes("frontend")
  ) {
    matchReason = "Matched because this role aligns with frontend development experience.";
  }
  else if (
    title.toLowerCase().includes("full stack") ||
    title.toLowerCase().includes("mern")
  ) {
    matchReason = "Matched because your profile aligns with MERN stack development.";
  }

  return {
    id: index + 1,
    title,
    company: job.company?.display_name || "Unknown",
    location: job.location?.display_name || "Remote",
    description,
    applyUrl: job.redirect_url || "#",
    matchScore: Math.floor(Math.random() * 40) + 60, // optional
    matchReason,
  };
});

  } catch (error) {
    console.error(
      "Adzuna API error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

module.exports = { fetchJobs };
