import axios from "axios";

const api = axios.create({
    baseURL:"https://ai-job-tracker-eg7d.onrender.com",
});

export default api;