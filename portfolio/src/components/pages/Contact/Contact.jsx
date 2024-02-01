import React from 'react';
import "./styleContact.css";
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm';
import PDFViewer from './PDFViewer';

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a className='mail-link' href={`mailto:${email}${params}`}>{children}</a>;
};

// function to display contact information
function Contact() {
  return (
    <div className='contact-container'>
      <h1>Contact Me</h1>
      <p>
        Send me an email using the form below:
      </p>
      <ContactForm />

      <Mailto className="mail-link" email="lcbarham9@gmail.com" subject="Hello" body="">
        lcbarham9@gmail.com
      </Mailto>

      <p className='phone-number'>07950 800 481</p>

      <div className='contact-link-box'>
        <Link target="_blank" className="contact-link linked-in" to="https://www.linkedin.com/in/lydia-barham-5a92962b0/">LinkedIn</Link>
        <span className='contact-span'></span>
        <Link target="_blank" className="contact-link git-hub" to="https://github.com/lydiabarham">GitHub</Link>
      </div>

      <h2 className='cv-header'>My CV</h2>

      <PDFViewer />

    </div>
  );

}

export default Contact;
