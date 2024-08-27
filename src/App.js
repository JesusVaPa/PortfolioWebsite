import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { typeWriterEffect } from './typeWriter';

function App() {

  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      typeWriterEffect(textRef.current.id, 50); 
    }
  }, []);

  const [text, setText] = useState('vapa.jesusangel@gmail.com');
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Email copied to clipboard!');
    });
  };

  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (section) => {
    setActiveSection(section);

  };
  return ( 
    <div className="App">
      <div className="sidebar">
      <img src="media/profile.png" alt="Profile" className="profile-img" />
      <nav>
          <ul>
            <li className={activeSection === 'home' ? 'active' : ''}>
              <a href="#home" onClick={() => handleNavigation('home')}>ANGEL</a>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <a href="#about" onClick={() => handleNavigation('about')}>ABOUT ME</a>
            </li>
            <li className={activeSection === 'portfolio' ? 'active' : ''}>
              <a href="#portfolio" onClick={() => handleNavigation('portfolio')}>PORTFOLIO</a>
            </li>
            <li className={activeSection === 'education' ? 'active' : ''}>
              <a href="#education" onClick={() => handleNavigation('education')}>EDUCATION</a>
            </li>
            <li className={activeSection === 'skills' ? 'active' : ''}>
              <a href="#skills" onClick={() => handleNavigation('skills')}>SKILLS</a>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <a href="#contact" onClick={() => handleNavigation('contact')}>CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <p id="full-name"><span className="first-name">ANGEL</span> <span className="last-name">VAZQUEZ</span></p>
        <span id="animated-text" ref={textRef}>On the path to becoming a software developer.</span>
        <p >WELCOME TO MY PORTFOLIO AS A DEVELOPER IN TRAINING.</p>
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
    </div>    
  );
}

export default App;
