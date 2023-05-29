import React from 'react';
import './Hero.css';

const SkillsHero: React.FC = () => {
  return (
    <section className="hero">
      <div className="heroContent">
        <h1>My skillset</h1>
        <p>Lets keep learning.</p>
        <div className='skillCategory'>
          <div className="skillBox">
            <h3>FrontEnd</h3>
          </div>
          <div className="skillBox">
            <h3>BackEnd</h3>
          </div>
          <div className="skillBox">
            <h3>DevOps</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsHero;