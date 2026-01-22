import { useState } from "react";

function AISidebar({ jobs }) {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    const q = query.toLowerCase();

    if (q.includes("remote")) {
      const filtered = jobs.filter(job =>
        job.location.toLowerCase().includes("remote")
      );
      setResponse(`I found ${filtered.length} remote jobs for you.`);
    }

    else if (q.includes("react")) {
      const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes("react")
      );
      setResponse(`I found ${filtered.length} React-related jobs.`);
    }

    else if (q.includes("highest match")) {
      const sorted = [...jobs].sort(
        (a, b) => (b.matchScore || 0) - (a.matchScore || 0)
      );
      setResponse(
        sorted.length > 0
          ? `The highest matched job is "${sorted[0].title}".`
          : "No match scores available yet."
      );
    }

    else if (q.includes("upload")) {
      setResponse(
        "You can upload your resume using the Upload Resume section on the main page."
      );
    }

    else if (q.includes("applications")) {
      setResponse(
        "Applied jobs will appear in your application tracking section."
      );
    }

    else {
      setResponse(
        "I can help you find jobs or guide you in using the application."
      );
    }
  };

  return (
    <div
      style={{
        width: "280px",
        borderLeft: "1px solid #ddd",
        padding: "15px",
      }}
    >
      <h3>AI Assistant</h3>

      <input
        type="text"
        placeholder="Ask me about jobs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <button onClick={handleAsk}>Ask</button>

      {response && <p style={{ marginTop: "10px" }}>{response}</p>}
    </div>
  );
}

export default AISidebar;
