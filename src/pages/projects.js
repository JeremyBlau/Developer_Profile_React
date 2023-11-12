// Import React
import React from 'react';
import '../styles/project.css';

// Sample data representing developer's applications
const projectsData = [
  {
    title: 'Project 1',
    image: 'project1.jpg',
    deployedLink: 'https://example.com/project1',
    githubLink: 'https://github.com/example/project1',
  },
  {
    title: 'Project 2',
    image: 'project2.jpg',
    deployedLink: 'https://example.com/project2',
    githubLink: 'https://github.com/example/project2',
  },
  {
    title: 'Project 3',
    image: 'project3.jpg',
    deployedLink: 'https://example.com/project3',
    githubLink: 'https://github.com/example/project3',
  },
  {
    title: 'Project 4',
    image: 'project4.jpg',
    deployedLink: 'https://example.com/project4',
    githubLink: 'https://github.com/example/project4',
  },
  {
    title: 'Project 5',
    image: 'project5.jpg',
    deployedLink: 'https://example.com/project5',
    githubLink: 'https://github.com/example/project5',
  },
  {
    title: 'Project 6',
    image: 'project6.jpg',
    deployedLink: 'https://example.com/project6',
    githubLink: 'https://github.com/example/project6',
  },
];

// Define the Projects component
export default function Projects() {
  return (
    <div className="projects-container">
      <h1>This is the Projects Page</h1>
      {/* Map through the projectsData array to dynamically generate project elements */}
      {projectsData.map((project, index) => (
        <div key={index} className="project">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <a
            href={project.deployedLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed Link
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      ))}
    </div>
  );
}
