import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Typing from './Typing';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Experience from './Experience'; // Ensure Experience is imported

function Home() {
  return (
    <div>
      <ProgressBar />
      <Typing
        text={[
          "Hello, I am a student!",
          "I am an engineer!",
          "Welcome to my Portfolio!",
        ]}
        typingSpeed={100}
        deletingSpeed={50}
        duration={1000}
      />
    </div>
  );
}

function Resume() {
  return <div>TO BE ADDED</div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
