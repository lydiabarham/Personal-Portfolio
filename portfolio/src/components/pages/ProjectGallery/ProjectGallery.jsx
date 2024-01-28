import React from 'react';
import ProjectCard from './Projects/ProjectCard';
import projectData from './Projects/projects.json';
// import movieImg from "portfolio/public/images/movie.png"
// import passwordImg from "./Projects./images/password.png";
// import portfolioImg from "./Projects./images/portfolio.png";
// import quizImg from "./Projects./images/quiz.png";
// import schedulerImg from "./Projects./images/scheduler.png";
// import weatherImg from "./Projects./images/weather.png";

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
