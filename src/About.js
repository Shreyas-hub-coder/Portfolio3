// About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <img 
          src="https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif" 
          alt="About Me" 
          className="about-image"
        />
        <div className="about-text">
          <p>
            Hello! I'm Shreyas Garg, a passionate student with a love for engineering and technology.
          </p>
          <p>
            I have been involved in various projects that span across different domains, showcasing my versatility and eagerness to learn and grow.
          </p>
          <p>
            In my free time, I enjoy exploring new technologies, working on personal projects, and enhancing my skills. I believe in continuous learning and strive to keep myself updated with the latest trends in the industry.
          </p>
          <p>
            Feel free to explore my portfolio and get in touch if you would like to discuss any potential collaborations or opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
