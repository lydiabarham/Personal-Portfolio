import React from "react";
import { Link } from 'react-router-dom'


function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} height="400" />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <Link to= {props.deployed}>Deployed</Link>
          </li>
          <li>
            <Link to= {props.gitHub}>GitHub</Link> 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
