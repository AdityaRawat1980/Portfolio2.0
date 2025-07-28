import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/Project';
import '../styles/Projecs.css'; // New external stylesheet

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
