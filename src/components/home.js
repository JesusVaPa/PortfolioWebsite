import React, { useRef, useEffect, useState } from 'react';
import '../css/home.css';
import { typeWriterEffect } from './typeWriter.js';

function Home({ activeSection }) {
  
  const textRef = useRef(null);
  const [text] = useState("vapa.jesusangel@gmail.com");

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Email copied to clipboard!");
  };

  useEffect(() => {
    typeWriterEffect('animated-text', 70); 
  }, []);

  return (
    <div id='home'>
      <p id="full-name">
        <span className="first-name">ANGEL</span> <span className="last-name">VAZQUEZ</span>
      </p>
      <span id="animated-text" ref={textRef}>On the path to becoming a software developer.</span>
      <p>WELCOME TO MY PORTFOLIO AS A DEVELOPER IN TRAINING.</p>
      <a href="/documents/AngelVazquezCV.pdf" download>
        <button className="download-button">Download my CV</button>
      </a>
      <div className="email-section">
        <input
          type="text"
          value={text}
          readOnly
          id="email-input"
          className="email-input"
        />
        <button className="copy-button" onClick={handleCopy}>
          Copy Email
        </button>
      </div>
    </div>
  );
}

export default Home;
