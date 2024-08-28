import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Content from './components/content';
import AboutMe from './components/aboutMe';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Sidebar activeSection={activeSection} handleNavigation={handleNavigation} />
      <div className="content">
        <Content activeSection={activeSection} />
        {activeSection === 'about' && <AboutMe />}
      </div>
    </div>
  );
}

export default App;
