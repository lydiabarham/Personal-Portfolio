import React from 'react';
import "./styleContact.css";
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm';


// function to display contact information
function Contact() {
  return (
    <div className='contact-container'>
      <h1>Contact Page</h1>
      <p>
        Contact links and form will go in here
      </p>
      <div className='link-box'>
          <Link target="_blank" className="link" to="https://www.linkedin.com/in/lydia-barham-5a92962b0/">LinkedIn</Link> 
          <Link target="_blank" className="link" to="https://github.com/lydiabarham">GitHub</Link>
        </div>
      <ContactForm/>
      
    </div>
  );
  
}

export default Contact;
