import React, { useState } from 'react'
import './styleAbout.css'
import aboutData from "./about.json"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function AboutCard(props) {
  return (
  <div className="about-section">
    <img className="about-img" src={props.image} alt={props.alt} height="50vh"></img>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(218, 116, 34, 0.5', color: '#30362f' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    text={props.text}
    date={props.date}
    iconStyle={{ background: '#da7422', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">{props.name}</h3>
    <p className='about-text'>
      {props.description}
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>
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
      <div className='about-container'>
      {aboutData.map((about) => (
        <AboutCard
          key={about.id} 
          id={about.id}
          name={about.name}
          image={about.image}
          alt={about.alt}
          description={about.description}
          date={about.date}
        />
      ))}
    </div>

    </div>
  );
}

export default About;
