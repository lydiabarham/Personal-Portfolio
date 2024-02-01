import React from 'react';
import "./styleContact.css";
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm';


// function to display contact information
function Contact() {
  return (
    <div className='contact-container'>
      <h1>Contact Me</h1>
      <p>
        Send me an email using the form below: 
      </p>
      <ContactForm/>

      <p>
        Email: lcbarham9@gmail.com
      </p>
      <p>Phone: 07950 800 481</p>

      <div className='contact-link-box'>
          <Link target="_blank" className="contact-link linked-in" to="https://www.linkedin.com/in/lydia-barham-5a92962b0/">LinkedIn</Link> 
          <span className='contact-span'></span>
          <Link target="_blank" className="contact-link git-hub" to="https://github.com/lydiabarham">GitHub</Link>
        </div>
      
    </div>
  );
  
}

export default Contact;
