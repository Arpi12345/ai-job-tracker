import { useState } from "react";
import api from "../services/api";

function ResumeUpload({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("resume", file);

      await api.post("/resume/upload", formData);
      setMessage("Resume uploaded successfully");
      onUploadSuccess();
    } catch {
      setMessage("Upload failed");
    }
  };

  return (
    <>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </>
  );
}


export default ResumeUpload;


