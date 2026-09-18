import { useState } from "react";

import Navbar from "./Components/Navbar";
import UrlForm from "./Components/UrlForm";
import Result from "./Components/Result";

function App() {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1>
            Shorten Your <span>Links</span>
          </h1>

          <p>Turn long URLs into short, simple and shareable links.</p>
        </section>

        {/* URL Form */}
        <UrlForm setShortUrl={setShortUrl} />

        {/* Result */}
        <Result shortUrl={shortUrl} />
      </main>

      {/* Footer */}
      <footer>Made with ❤️ using the MERN Stack</footer>
    </div>
  );
}

export default App;
