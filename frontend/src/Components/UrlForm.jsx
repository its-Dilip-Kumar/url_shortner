import { useState } from "react";
import axios from "axios";

function UrlForm({ setShortUrl }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!url.trim()) {
      setError("Please enter a Url");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        "/api/url/shorten",
        {
          originalUrl: url,
        },
      );
      console.log(response.data);
      setShortUrl(response.data.shortUrl);
      setUrl("");
    }catch (error) {
    console.log("ERROR:", error);
    console.log("RESPONSE:", error.response);
    console.log("MESSAGE:", error.message);

    setError(error.message);
} finally {
      setLoading(false);
    }
  };
  return (
    <div className="url-form">
      <h2>Enter your long URL</h2>
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="https://www.youtube.com/watch?v=..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        ></input>
        <button type="submit">
          {loading ? "Shortening..." : "🔗 Shorten URL"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default UrlForm;
