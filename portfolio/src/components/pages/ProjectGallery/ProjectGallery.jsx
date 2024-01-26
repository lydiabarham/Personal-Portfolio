import React from 'react';
import ProjectCard from './Projects/ProjectCard';
import projectData from './Projects/projects.json';

function ProjectGallery() {
  return (
    <div>
      {projectData.map((project) => (
        <ProjectCard
          id={project.id}
          key={project.id}
          name={project.name}
          image={project.image}
          occupation={project.occupation}
          location={project.location}
        />
      ))}
    </div>
  );
}

export default ProjectGallery;
