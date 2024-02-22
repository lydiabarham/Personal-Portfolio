import React from 'react';
import './styleFooter.css'

{/* Define Mailto function to call with ContactForm component*/} 
const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a className='footer-mail-link' href={`mailto:${email}${params}`}>{children}</a>;
};

{/*create Footer component */} 
function Footer() {
  return (
    <div className='footer'>
    <Mailto className="footer-mail-link" email="lcbarham9@gmail.com" subject="Hello" body="">
        Get in touch
      </Mailto>
    </div>
  );
}

export default Footer 