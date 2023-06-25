import React from 'react';
import './Hero.css';

import { ContactUs } from '../email';
import ReactProjects from './Projects/ReactProjects';
import PythonProjects from './Projects/PythonProjects';

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
    <div className='projects'>
      <p>Here are some projects I created using React.</p>
      <ReactProjects />
      <p>Here are some projects I created using Python.</p>
      <PythonProjects />
    </div>
    </>
  );
};

export default Hero;