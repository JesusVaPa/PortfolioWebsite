import React from 'react';

function Sidebar({ activeSection, handleNavigation }) {
  return (
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
  );
}

export default Sidebar;
