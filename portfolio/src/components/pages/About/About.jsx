import React, { useState } from 'react'
import './styleAbout.css'
import aboutData from "./about.json"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function AboutCard(props) {
  return (
  <div className="about-section">
          <img className="about-img" src={props.image} alt={props.alt} height="50vh"></img>
          <p className='about-text'>{props.description}</p>
        </div>
  )
}


function About(props) {
  return (
    <div className='about-display'>
      <h1>About</h1>
      <p>
        This section tells you a bit more about me, my career so far, and some of my interests and hobbies. Hover over the text boxes for easy reading.
      </p>
      <p className="about-text">I currently work as an Education, Communication and Outreach Officer for Veolia. It is my job to promote recycling through planning and developing high-quality communications projects and delivering outreach and education to stakeholders and the public in the borough where I work. I am able to develop engaging and accurate content and communicate skillfully.</p>
      <div className='about-container'>
      {aboutData.map((about) => (
        <AboutCard
          key={about.id} 
          id={about.id}
          name={about.name}
          image={about.image}
          alt={about.alt}
          description={about.description}
        />
      ))}
    </div>

    </div>
  );
}

export default About;
