import React from 'react';
import "./styleHome.css";

function Home() {
  return (
    <div className='home-box'>
      <div className='home-container'>
        <h1>Home Page</h1>
        <img className='headShot' src="../../../../public/headshot.jpg" alt='Headshot' width='300px'></img>
        <p>
        I am a highly motivated, driven, and ambitious person looking to progress and learn more within a front-end development position. Having recently completed a 16-week EdX bootcamp, I have turned my problem-solving skills into development skills and transferred my Photoshop skills to UX design principles, creating functioning, user-friendly apps with visually-compelling layouts. 
        </p>
        
      </div>
    </div>
  );
}

export default Home;
