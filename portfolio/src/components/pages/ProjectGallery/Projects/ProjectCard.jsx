import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styleProject.css'


function ShowContent(props) {
  return (
    <div className="content">
      <div>
        <h1 className="project-name">
          {props.name}
        </h1>
      </div>
      <div className='info-container'>
        <div className='project-description'>
          <p className="card-text"> {props.description} </p>
        </div>
        <div className='link-box'>
          <Link target="_blank" className="link" to={props.deployed}>Deployed</Link> <Link target="_blank" className="link" to={props.gitHub}>GitHub</Link>
        </div>
      </div>
    </div>
  )
}


function ProjectCard(props) {
  const [showContent, setShowContent] = useState(false);
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
    setContentVisible(!isContentVisible);
  };

  return (
    <div className='card-container'>
      <div className={isContentVisible ? 'card expanded' : 'card'} onClick={toggleContent}>
        <div className="img-container">
          <img className='center-fit' alt={props.name} src={props.image}/>
        </div>
        {showContent && <ShowContent {...props} />}
      </div>
    </div>
  );
}

export default ProjectCard;
