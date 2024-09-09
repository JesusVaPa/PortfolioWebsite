import React from 'react';
import '../css/sidebar.css';
import profileImage from '../media/profile.png';

function Sidebar({ activeSection, handleNavigation }) {
  return (
    <div className="sidebar">
      <div className="profile-img-container">
        <img src={profileImage} alt="Profile" className="profile-img" />
      </div>
      <nav>
        <ul className="nav flex-column">
          <li className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}>
            <a href="#home" onClick={() => handleNavigation('home')} className="nav-link">Home</a>
          </li>
          <li className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
            <a href="#about" onClick={() => handleNavigation('about')} className="nav-link">About Me</a>
          </li>
          <li className={`nav-item ${activeSection === 'portfolio' ? 'active' : ''}`}>
            <a href="#portfolio" onClick={() => handleNavigation('portfolio')} className="nav-link">Portfolio</a>
          </li>
          <li className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}>
            <a href="#education" onClick={() => handleNavigation('education')} className="nav-link">Education</a>
          </li>
          <li className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}>
            <a href="#skills" onClick={() => handleNavigation('skills')} className="nav-link">Skills</a>
          </li>
          <li className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
            <a href="#contact" onClick={() => handleNavigation('contact')} className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
