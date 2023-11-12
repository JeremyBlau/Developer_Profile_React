import React from 'react';
import myResume from '../assets/resume/Resume_Jeremy Wallace Blau.pdf';
import '../styles/resume.css';

export default function Resume() {
  // Function to handle the download action
  const handleDownload = () => {
    // Use the imported resume file
    const resumeUrl = myResume;

    // Create an anchor element with the download attribute
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume_Jeremy Wallace Blau.pdf';

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Trigger a click on the anchor element
    link.click();

    // Remove the anchor element from the body
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
}
