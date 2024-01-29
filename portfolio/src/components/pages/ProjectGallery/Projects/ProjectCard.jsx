import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styleProject.css'


function ShowContent(props) {
  return (
      <div className="content">
        <div>
        <ul>
          <li className="project-name">
            {props.name}
          </li>
          <li>
            <Link target="_blank" className="link" to={props.deployed}>Deployed</Link> <Link target="_blank" className="link" to={props.gitHub}>GitHub</Link>
          </li>
        </ul>
      </div>
      <div className='project-description'>
        <p className="card-text"> {props.description} </p>
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
    <div className={isContentVisible ? 'card expanded' : 'card'} onClick={toggleContent}>
      <div className="img-container">
        <img className='center-fit' alt={props.name} src={props.image} />
      </div>
      {showContent && <ShowContent {...props} />}
    </div>
  );
}

export default ProjectCard;
