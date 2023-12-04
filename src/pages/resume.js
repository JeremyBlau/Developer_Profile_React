import React from 'react';
import '../styles/resume.css';
import ResumeFile from '../assets/resume/Resume_Jeremy Blau.pdf';

const Resume = () => {
  const handleDownload = () => {
    const resumeUrl = ResumeFile;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume_Jeremy Wallace Blau.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <section className="experience-section">
        <h2>Experience</h2>
        <div className="experience-container">
          <div className="experience-column">
            <h3>Front-end Experience</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>PWA</li>
              <li>Webpack</li>
            </ul>
          </div>

          <div className="experience-column">
            <h3>Back-end Experience</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Database (e.g., MongoDB)</li>
              <li>MySQL</li>
              <li>RESTful API Design</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Click to Download My Resume</h2>
        <button type="button" onClick={handleDownload}>
          Resume
        </button>
      </section>
    </div>
  );
};

export default Resume;
