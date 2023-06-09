import React from 'react';
import './Hero.css';

import { ContactUs } from '../email';

const Hero: React.FC = () => {
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, nice to meet you, I am Derrick Martin</h1>
        <p>Welcome to my portfolio.</p>
        <button><ContactUs /></button>
      </div>
    </section>
    </>
  );
};

export default Hero;