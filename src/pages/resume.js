import React from 'react';

export default function Resume() {
  // Function to handle the download action
  const handleDownload = () => {
    // Replace 'your_resume.pdf' with the actual filename of your resume
    const resumeUrl = '/path/to/your_resume.pdf';

    // Create an anchor element with the download attribute
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'your_resume.pdf';

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Trigger a click on the anchor element
    link.click();

    // Remove the anchor element from the body
    document.body.removeChild(link);
  };

  return (
    <div>
      <header>
        <h1>Your Name</h1>
        <p>Web Developer</p>
      </header>

      {/* ... (previous sections) */}

      <section>
        <h2>Download Resume</h2>
        <button type="button" onClick={handleDownload}>
          Download
        </button>
      </section>
    </div>
  );
}
