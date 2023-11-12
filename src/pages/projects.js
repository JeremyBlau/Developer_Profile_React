// Import React
import React from 'react';
import '../styles/Projects.css';

const projectsData = [
  {
    title: 'Art Beats',
    image: 'assets/images/ArtBeats.png',
    deployedLink: 'https://jeremyblau.github.io/ArtBeats/',
    githubLink: 'https://github.com/JeremyBlau/ArtBeats',
  },
  {
    title: '5 Day Weather Forcast API',
    image: 'project2.jpg',
    deployedLink: 'https://jeremyblau.github.io/Weather-Forecast-API/',
    githubLink: 'https://github.com/JeremyBlau/Weather-Forecast-API',
  },
  {
    title: 'Coding Quiz',
    image: 'project3.jpg',
    deployedLink: 'https://jeremyblau.github.io/Coding-quiz/',
    githubLink: 'https://github.com/JeremyBlau/Coding-quiz',
  },
  {
    title: 'Doodle Duel',
    image: 'project4.jpg',
    deployedLink: 'https://doodle-duel-p2-32e9f10a2b67.herokuapp.com/login',
    githubLink: 'https://github.com/Leucisticboi/DoodleDuel',
  },
  {
    title: 'Social Network API',
    image: 'project5.jpg',
    deployedLink: 'https://watch.screencastify.com/v/qL9k6FlCQbkizq8bq66y',
    githubLink: 'https://github.com/JeremyBlau/Social_Network_API',
  },
  {
    title: 'Website Setup',
    image: 'project6.jpg',
    deployedLink: 'https://github.com/JeremyBlau/Website_Setup',
    githubLink: 'https://jeremyblau.github.io/Website_Setup/',
  },
];

// Define the Projects component
export default function Projects() {
  return (
    <div className="projects-container">
      <h1>Enjoy my projects!</h1>
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
