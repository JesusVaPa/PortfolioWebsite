import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Home from './components/home';
import AboutMe from './components/aboutMe';
import Portfolio from './components/portfolio';
import Education from './components/education';
import Skills from './components/skills';
import Contact from './components/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigation = (section) => {
    setActiveSection(section);
    setSidebarOpen(false); 
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
      <button
        className="btn btn-primary d-md-none" 
        type="button"
        onClick={() => setSidebarOpen(!isSidebarOpen)}  
      >
        <i className="bi bi-list" style={{ fontSize: '1.5rem' }}></i>
      </button>
      <div className={`sidebar-container ${isSidebarOpen ? 'd-block' : 'd-none'} d-md-block`}>
        <Sidebar activeSection={activeSection} handleNavigation={handleNavigation} />
      </div>
      <div className="content">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
