import React from 'react';
import emailjs from '@emailjs/browser';

//HeroSection
import Hero from '../../components/Home/Hero';

const Home = () => {

  const sendEmail = async () => {
    try {
      const response = await emailjs.send(
        'service_xokj9ke',
        'template_85sfsjw',
        { /* Email template variables */ },
        'F4Hz-esOsqEL9dYZ5'
      );
      console.log('Email sent successfully:', response.status);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
    return (
      <div>
        <Hero />
        <h1>Home Page</h1>
        <p>Welcome to my website!</p>
        <div>
        <button onClick={sendEmail}>Send Email</button>
        </div>
      </div>
    );
  };
  
  export default Home;