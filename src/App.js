import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Home from './components/home';
import AboutMe from './components/aboutMe';
import Portfolio from './components/portfolio';
import Education from './components/education';
import Skills from './components/skills';
import Contact from './components/contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <AboutMe />;
      case 'portfolio':
        return <Portfolio />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Sidebar activeSection={activeSection} handleNavigation={handleNavigation} />
      {renderSection()}
    </div>
  );
}

export default App;
