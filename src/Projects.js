// Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  const projectsData = [
    {
      title: 'Portfolio',
      description: 'Created my portfolio website using React.',
      link: 'https://github.com/Shreyas-hub-coder/QuizApp'
    },
    {
      title: 'Music Player',
      description: 'Created a Music PLayer using HTML, CSS, and JavaScript.',
      link: 'https://github.com/Shreyas-hub-coder/Music-Player'
    },
    {
      title: 'Quiz App',
      description: 'Created a quiz app using HTML, CSS, and JavaScript.',
      link: 'https://github.com/Shreyas-hub-coder/QuizApp'
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
