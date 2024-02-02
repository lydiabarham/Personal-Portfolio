import React from 'react';
import "./styleHome.css";

function Home() {
  return (
    <div className='home-box'>
      <div className='home-cont'>
        <h1>Me Now</h1>
        <img className='head-shot' src="../../../../public/headshot.jpg" alt='Headshot' width='300px'></img>
        <h3 className='prof-heading'>My Professional Goals</h3>
        <div className='home-text'>
          <p>
        I am a highly motivated, driven, and ambitious person looking to progress and learn more within front-end development.
        </p>
        <p>
        Alongside fulltime work, I have recently completed a 16-week EdX skills bootcamp. Putting in the passion and the hours, I have gained a solid understanding of HTML, CSS, and JavaScript and fundamental skills and programmes such as Bootstrap, React, JQuery, and Node. 
        </p>
        <p>
        I have turned my problem-solving skills into development skills and transferred my Photoshop skills to UX design principles, creating functioning, user-friendly apps with clean, modern layouts. 
        </p>
        </div>
        <img className='head-shot allotment-shot' src="../../../../allotment_img.JPG" alt='Allotment' width='300px'></img>
        <h3>My Personal Goals</h3>
        <div className='home-text'>
          <p>
        My personal projects are inspired by my love of nature. I have an allotment in South-East London where I grow as much of my own food as possible and I am planning to combine my passion for the growing with my web development skills to track the story and progress of the plot.
        </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
