import React from 'react';
import "./styleHome.css";

{/*create Home page component */} 
function Home() {
  return (
    <div className='home-box'>
      <div className='home-cont'>
        <h1>Personal <strong>Profile</strong></h1>
        <img className='head-shot' src="../../../../headshot.jpg" alt='Headshot' width='300px'></img>
        <h3 className='prof-heading'>Web development</h3>
        <div className='home-text'>
          <ul>
          <li>
          Creative, ambitious front-end developer 
          </li>
          <li>4 month front-end development bootcamp recently completed alongside full time work</li>
          <li>Problem-solving and practical development skills</li> 
          <li>Understanding of UI design principles</li>
          <li>Attention to detail brought to tight deadlines</li> 
          </ul>
        <p>I am looking for an opportunity to refine my development skills and craft elegant, future-ready projects
        </p>
        <div className='recipe-box'>
          <h5>Skills</h5>
        <p>
        Putting in energy and dedication, I have developed a good understanding of <strong>HTML, CSS,</strong> and <strong>JavaScript</strong> and developed with <strong>React</strong>. I have contributed to two group projects, working with version control system <strong>GitHub</strong>, implemented <strong>server side APIs</strong> and built experience using <strong>Node.js</strong> and <strong>Vite</strong>. 
        </p>
        <p>
          Intuitive, clear, accessible, and purpose lead, I have built and deployed web applications designed to put the user first. 
        </p>
        <p>
        I am looking to progress, develop, and refine my development skills.
        </p>
        </div>
        </div>
        <img className='head-shot allotment-shot' src="../../../../allotment_img.JPG" alt='Allotment' width='300px'></img>
        <h3>Professional</h3>
        <div className='home-text'>
          <p>
            I graduated university in 2018 and sought to develop my passion for food, sustainability and community and developed a career as a chef. Working with sustainable and seasonal ingredients, putting interesting flavour profiles alongside nutrition, I worked in the industry for 5 years. In 2021, I started a street food business in Manchester using surplus food to create globally inspired, climate-friendly food. 
          </p>
          <p>
            On moving back to London in February 2023, I took my passion for sustainability, experience delivering community engagement workshops and outreach, and ability to develop high-quality content into an Education, Communications and Outreach role at the recycling company Veolia.
          </p>
          <div className='recipe-box'>
          <h5>Recipe development to web development</h5>
          <p> 
            How front-end and food-prep overlap?
            </p>
            <p> Working in the food industry for five years, I fell in love with the pace and productivity of the kitchen. With a creative outlet to explore flavours, design recipes and test plating. The day-to-day of running a kitchen involves a series of challenges, with necessary pace, precision and passion in every plate, there is satisfaction to completing a service like no other... except, now, the satisfaction of solving an problem in code.
            </p>
            <p>In front-end and in the kitchen, there is the same ability to watch the project unravel, to watch the stages and see the final outcome of the project, <strong>the product</strong>. 
          </p>
          </div>
          <h3>Personal</h3>
          <ul>
          <li>
        Growing food at my allotment in South-East London
        </li>
        <li>
          Cooking
        </li>
        <li>
          Music, art, written word
        </li>
        <li>
          Nature
        </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
