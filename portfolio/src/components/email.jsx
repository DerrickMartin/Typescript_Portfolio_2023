import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './email.css';

export const ContactUs = () => {
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xokj9ke', 'template_85sfsjw', form.current, 'F4Hz-esOsqEL9dYZ5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {!isOpen && <button onClick={openForm}>Contact Me</button>}
      {isOpen && (
        <div className="form-overlay">
          <form ref={form} onSubmit={sendEmail} className="form-container">
            <button className="close-button" onClick={closeForm}>
              X
            </button>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      )}
    </div>
  );
};





