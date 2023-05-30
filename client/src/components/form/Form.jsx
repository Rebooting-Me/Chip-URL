import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Form = ({ isAuthenticated }) => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      originalUrl: originalUrl,
      shortUrl: isAuthenticated ? shortUrl : "", // Use custom URL only if authenticated
    };

    fetch("http://localhost:8000/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setGeneratedUrl(data.shortUrl);
        setShowOverlay(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          type="url"
          id="originalUrl"
          name="originalUrl"
          placeholder="Enter the original url*"
          required
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        {!isAuthenticated && (
          <p
            style={{ color: "white", fontFamily: "Inter", textAlign: "center" }}
          >
            Want a custom shortened url?
            <br />
            <a
              href="/login"
              style={{ color: "#FF5E3A", textDecoration: "none" }}
            >
              Sign up!
            </a>
          </p>
        )}
        {isAuthenticated && (
          <input
            type="text"
            id="shortUrl"
            name="shortUrl"
            placeholder="Customize your link"
            value={shortUrl}
            onChange={(e) => setShortUrl(e.target.value)}
          />
        )}
        <button type="submit" id="chip">
          <span>Chip!</span>
        </button>
      </form>
      {showOverlay && (
          <div className="overlay">
            <h3>Short URL Generated!</h3>
            <CopyToClipboard
              text={generatedUrl}
              onCopy={() => setIsCopied(true)}
            >
              <p>{generatedUrl}</p>
            </CopyToClipboard>
            <CopyToClipboard
              text={generatedUrl}
              onCopy={() => setIsCopied(true)}
            >
              <button>{isCopied ? "Copied!" : "Copy to Clipboard"}</button>
            </CopyToClipboard>
            <button
              onClick={() => {
                setShowOverlay(false);
                setOriginalUrl("");
                setShortUrl("");
                setIsCopied(false);
              }}
            >
              Close
            </button>
          </div>
      )}
    </section>
  );
};

export default Form;
