import React from 'react';
import './styleFooter.css'

{/*create Footer component */ }
function Footer() {
  return (
    <div className='footer'>
      <ul className='footer-list'>
      <li><a href="/" className="footer-contact-link">
        Profile
      </a></li>
      <li><a href="/project" className="footer-contact-link">
        Projects
      </a></li>
      <li><a href="/about" className="footer-contact-link">
        Past
      </a></li>
      <li><a href="contact/*" className="footer-contact-link">
        Contact
      </a></li>
      </ul>
    </div>
  );
}

export default Footer 