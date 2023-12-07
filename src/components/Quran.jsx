import React, { useState, useEffect } from "react";

function Quran() {
  const [loading, setLoading] = useState(true);

  const iframeStyle = {
    borderRadius: "12px",
    width: "80%", // Set the width of iframes
    maxWidth: "400px", // Set a maximum width if needed
    height: "152px", // Set the height of iframes
    margin: "10px", // Center horizontally
    display: "block", // Make sure iframes are block elements
    visibility: loading ? "hidden" : "visible",
  };

  const skeletonStyle = {
    width: "80%",
    maxWidth: "400px",
    height: "152px",
    margin: "10px",
    borderRadius: "12px",
    backgroundColor: "#ccc",
    display: loading ? "block" : "none",
    animation: loading ? "pulse 1.5s infinite" : "none",
  };

  const containerStyle = {
    background: "linear-gradient(to bottom right, #3498db, #3cb371)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "15px 30px",
    margin: "10px",
    backgroundColor: "#3498db",
    color: "#ffffff",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "16px",
    border: "none",
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating loading for 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={containerStyle}>
      {/* Tillbaka Button */}
      <a href="/" style={buttonStyle}>
        Tillbaka
      </a>
      {/* Skeleton Loader */}
      {[...Array(9)].map((_, index) => (
        <div key={index} style={skeletonStyle}></div>
      ))}
      {/* Iframes with Skeleton Loader */}
      {/* Iframe 1 */}
      <iframe
        style={iframeStyle}
        src="https://open.spotify.com/embed/episode/2WNk7yGslQAEADNdUbY4qM?utm_source=generator&theme=0"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="iframe1"
      ></iframe>
      {/* Iframe 2 */}
      <iframe
        style={iframeStyle}
        src="https://open.spotify.com/embed/episode/0C7ueajRVej9M4nchvfwEV?utm_source=generator"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="iframe2"
      ></iframe>
      {/* Iframe 3 */}
      <iframe
        style={iframeStyle}
        src="https://open.spotify.com/embed/episode/4ZaoTu35GVTeY8tycA6GTu?utm_source=generator"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="iframe3"
      ></iframe>
      {/* Iframe 4 */}
      <iframe
        style={iframeStyle}
        src="https://open.spotify.com/embed/episode/4LWeUTQOwoWrRdAGpjchmb?utm_source=generator"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="iframe4"
      ></iframe>
      {/* Iframe 5 */}
      <iframe
        style={iframeStyle}
        src="https://open.spotify.com/embed/episode/2WPr8tkTWXS75QEkiHbg9p?utm_source=generator&theme=0"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="iframe5"
      ></iframe>
      {/* Iframe 6 */}
      <iframe
        style={iframeStyle}
        src="https://open.spotify.com/embed/episode/6kta4Sju0uyBV92fU7Mn0o?utm_source=generator&theme=0"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="iframe6"
      ></iframe>
      {/* Iframe 7 */}
      <iframe
        style={iframeStyle}
        src="https://open.spotify.com/embed/episode/6m5gj1eeDvjYlZkNXeGvPq?utm_source=generator"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="iframe7"
      ></iframe>
      {/* Iframe 8 */}
      <iframe
        style={iframeStyle}
        src="https://open.spotify.com/embed/episode/2BlKGrOTH699pDQETvYsy9?utm_source=generator"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="iframe8"
      ></iframe>
      {/* Iframe 9 */}
      <iframe
        style={iframeStyle}
        src="https://open.spotify.com/embed/episode/0XQHtOZkvZcK5g4wzuVpuD?utm_source=generator&theme=0"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="iframe9"
      ></iframe>
      <div>
        {/* Cool Button */}
        <a
          href="https://open.spotify.com/show/4jUR6E3ZST5NmHDTNdk3EW"
          style={buttonStyle}
        >
          Lyssna på mer Quran här🎧📿
        </a>
      </div>
    </div>
  );
}

export default Quran;
