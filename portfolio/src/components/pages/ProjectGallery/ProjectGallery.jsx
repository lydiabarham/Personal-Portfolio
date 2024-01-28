import React from 'react';
import ProjectCard from './Projects/ProjectCard';
import projectData from './Projects/projects.json';
import './styleProject.css'

function ProjectGallery() {
  return (
    <div className='home-container'>
      {projectData.map((project) => (
        <ProjectCard
          id={project.id}
          name={project.name}
          image={project.image}
          deployed={project.deployed}
          gitHub={project.gitHub}
        />
      ))}
    </div>
  );
}

export default ProjectGallery;
