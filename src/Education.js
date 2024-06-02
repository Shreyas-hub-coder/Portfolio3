// Education.js
import React from 'react';
import './Education.css';

function Education() {
  const educationData = [
    {
      institution: 'Scaler School Of Technology',
      degree: 'BSc Computer Science - BITS Pilani',
      period: '2023 - 2027',
      description: 'Focused on software engineering, algorithms, and artificial intelligence. Participated in several coding competitions and hackathons.'
    },
    {
      institution: 'Delhi Public School, Ghaziabad',
      degree: 'Schooling - CBSE Board',
      period: '2009 - 2012',
      description: 'Studied science subjects with a focus on mathematics and computer science. Participated in various extracurricular activities and became the headboy.'
    },
    // Add more education data as needed
  ];

  return (
    <div className="education-container">
      <h1>Education</h1>
      <div className="education-list">
        {educationData.map((education, index) => (
          <div key={index} className="education-item">
            <h2>{education.institution}</h2>
            <h3>{education.degree}</h3>
            <p className="education-period">{education.period}</p>
            <p className="education-description">{education.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
