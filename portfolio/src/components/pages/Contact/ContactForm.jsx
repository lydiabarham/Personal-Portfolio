import React, { useState } from 'react';
import "./styleContact.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    yourName: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Alert the user 
    
    alert(`Thank you ${formData.yourName}, you will recieve a my up-to-date CV very soon!`);
    setFormData({
      yourName: '',
      email: '',
    });
  };


  return (
    <div>
      <p>
      Enter your name and email address and I'll send an up-to-date version of my CV.
      </p>
      <form className="form">
        <input
          value={formData.yourName}
          name="yourName"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
        />
        <input
          value={formData.email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;