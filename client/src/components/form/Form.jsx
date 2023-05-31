import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Form.css";
import { Link } from "react-router-dom";

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
    <section style={{position: 'relative'}}>
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
      {!isAuthenticated && (
        <p>
          Want a custom shortened url?
          <br />
          <Link href="/login" style={{ color: "#FF5E3A", textDecoration: "none" }}>
            Sign up!
          </Link>
        </p>
      )}
      {showOverlay && (
        <div className="overlay">
          <div
            className="overlay-content"
            style={{
              position: "absolute",
              zIndex: "10000",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "25rem",
              height: "fit-content",
              padding: "5px 20px",
              backgroundColor: "#1C1B22",
            }}
          >
            <h2>Short URL Generated!</h2>
            <CopyToClipboard
              text={generatedUrl}
              onCopy={() => setIsCopied(true)}
            >
              <div
                style={{
                  width: 300,
                  height: 65,
                  borderRadius: 20,
                  borderStyle: "solid",
                  borderWidth: 3.5,
                  borderStyle: "solid",
                  borderColor: "white",
                  padding: "0 10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    color: "rgba(121.12, 121.12, 121.12, 1)",
                    fontSize: 20,
                  }}
                >
                  {generatedUrl}
                </p>
              </div>
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

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.24)",
              backdropFilter: "blur(2px)",
              zIndex: "100",
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Form;
/*
<div style={{width: 666, height: 362, position: 'relative',}}>
    <div style={{width: 656, height: 354, left: 10, top: 8, position: 'absolute', backgroundColor: 'black', borderRadius: 29, position: 'relative',}}>
        <p style={{width: 70, left: 541, top: 235, position: 'absolute', fontSize: 14, fontWeight: '300', lineHeight: '100%', textAlign: 'center',}}>copy to clipboard</p>
        <div style={{width: 68.72, height: 67, left: 542, top: 166, position: 'absolute',}}>
            <div style={{width: 68.72, height: 67, paddingLeft: 9, paddingRight: 9, paddingTop: 5, paddingBottom: 5, backgroundColor: 'white', borderRadius: 9, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                <img style={{width: 51.54, height: 56.69, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8,}} src="https://via.placeholder.com/51.53845977783203x56.69230651855469"/>
            </div>
        </div>
        <div style={{width: 493, height: 100, left: 10, top: 149, position: 'absolute', borderRadius: 28, borderStyle: 'solid', borderWidth: 4, borderStyle: 'solid', borderColor: 'white',}}/>
        <p style={{left: 33, top: 177, position: 'absolute', fontSize: 36, fontWeight: '300', lineHeight: '100%', color: 'rgba(121.12, 121.12, 121.12, 1)',}}>www.google.com/shorten</p>
        <div style={{width: 32, height: 31, left: 579, top: 44, position: 'absolute', backgroundColor: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 8,}}/>
        <p style={{width: 493, left: 10, top: 30, position: 'absolute', fontSize: 48, fontWeight: '600', lineHeight: '100%', color: 'white',}}>Short Url Generated!</p>
    </div>
    <div style={{width: 656, height: 352, left: 0, top: 0, position: 'absolute', backgroundColor: 'rgba(10, 25, 41, 1)', borderRadius: 29,}}/>
</div>
<div style={{width: 1920, height: 1080, backgroundColor: 'rgba(0, 0, 0, 0.24)',}}/>
*/
