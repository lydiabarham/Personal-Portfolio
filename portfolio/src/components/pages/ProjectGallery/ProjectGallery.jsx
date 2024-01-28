import React from 'react';
import ProjectCard from './Projects/ProjectCard';
import projectData from './Projects/projects.json';

function ProjectGallery() {
  return (
    <div>
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
