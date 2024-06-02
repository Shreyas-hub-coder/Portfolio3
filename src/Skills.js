// Skills.js
import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-list">
        <div className="skill">
          <h2>Programming Languages</h2>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
          </ul>
        </div>
        <div className="skill">
          <h2>Web Development</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="skill">
          <h2>Tools & Technologies</h2>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="skill">
          <h2>Other Skills</h2>
          <ul>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
