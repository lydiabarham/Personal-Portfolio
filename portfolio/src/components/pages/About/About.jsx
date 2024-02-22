import React, { useState } from 'react'
import './styleAbout.css'
import aboutData from "./about.json"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

{/*Create about/history section function using json object data into vertical timeline from React hook*/} 
function AboutCard(props) {
  return (
  <div className="about-section">
    <img className="about-img" src={props.image} alt={props.alt} height="50vh"></img>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#CD9C8A', color: '#1D1D1D' }}
    contentArrowStyle={{ borderRight: '7px solid  #CD9C8A' }}
    text={props.text}
    date={props.date}
    iconStyle={{ background: '#8f6d60', color: '#fff' }}
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

{/*create About component reading AboutCard function*/} 
function About(props) {
  return (
    <div className='about-display'>
      <h1>My <strong>History</strong></h1>
      <p>
        This section outlines some of the highlights of my career and education so far. 
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
