import React from 'react';
import ProjectCard from './Projects/ProjectCard';
import projectData from './Projects/projects.json';
import './Projects/styleProject.css'

function ProjectGallery() {
  return (
    <>
    <div className='home-container'>
      <h1>Project Gallery</h1>
      <p>
        Below are the projects I have worked on so far. Click on the image for links to the site and to read more about the skills, technologies and concepts used.
      </p>
      <div className='card-container'>
      {projectData.map((project) => (
        <ProjectCard
          key={project.id} 
          id={project.id}
          name={project.name}
          image={project.image}
          deployed={project.deployed}
          gitHub={project.gitHub}
          description={project.description}
        />
      ))}
    </div>
    </div>
    </>
  );
}

export default ProjectGallery;
