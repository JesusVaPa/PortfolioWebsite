import React from 'react';
import '../css/portfolio.css';
import githubBtn from "../media/githubbtn.mp4";

function Portfolio() {
  return (
    <div id='portfolio'>
      <p className='sectionTitle'>PORTFOLIO</p>
      <p>
        WORK IN PROGRESS...
      </p>
      <p>
        (ORGANIZING MY PROJECTS ON GITHUB AND ON THE WAY TO DEPLOY.)
      </p>
      <div className="video-container">
      <a href="https://github.com/JesusVaPa" target="_blank" rel="noopener noreferrer">
        <video className="clickable-video" width="100%" height="100%" autoPlay muted loop>
          <source src={githubBtn} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </a>
    </div>
    </div>
  );
}

export default Portfolio;