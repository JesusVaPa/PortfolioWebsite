import logo from './logo.svg';
import './App.css';

function App() {
  return ( 
    <div className="App">
      <div className="sidebar">
        <nav>
        <img src="./media/picture.jpg" alt="Profile" className="profile-img" />

          <ul>
            <li><a href="#home">Angel</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
