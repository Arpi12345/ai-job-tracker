# AI Job Tracker (MERN Stack)

AI Job Tracker is a full-stack MERN application that allows users to upload a resume
and view relevant job listings fetched from a real-time job search API.
The project focuses on clean architecture, real API integration, and correct
frontend–backend flow.

---

## Features
- Resume upload functionality
- Real-time job search using an external API
- Backend API integration and data normalization
- Clean separation between frontend and backend

---

## Tech Stack
- Frontend: React, Vite, Axios
- Backend: Node.js, Express
- External API: Adzuna Job Search API

---

## Application Flow
1. User uploads their resume
2. Backend accepts and validates the resume
3. Job search API is triggered after upload
4. Relevant jobs are displayed on the frontend

---

## How to Run the Project

### Backend
```bash
cd backend
npm install
npx nodemon index.js

Frontend

cd frontend
npm install
npm run dev

Environment Variables

ADZUNA_APP_ID=your_adzuna_app_id
ADZUNA_APP_KEY=your_adzuna_app_key
