import React from 'react';
import './Hero.css';
import { useState } from 'react';

const SkillsHero: React.FC = () => {
  const [clickedElements, setClickedElements] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setClickedElements(prevState => {
      if (prevState.includes(index)) {
        return prevState.filter(item => item !== index);
      } else {
        return [...prevState, index];
      }
    });
  };
  return (
    <section className="hero">
      <div className="heroContent">
        <h1>My skillset</h1>
        <p>Lets keep learning.</p>
        <div className='skillCategory'>
          <div className="skillBox">
          <h3 className={`skillSection ${clickedElements.includes(0) ? 'clicked' : ''}`} onClick={() => handleClick(0)}>FrontEnd</h3>
          </div>
          <div className="skillBox">
          <h3 className={`skillSection ${clickedElements.includes(1) ? 'clicked' : ''}`} onClick={() => handleClick(1)}>BackEnd</h3>
          </div>
          <div className="skillBox">
          <h3 className={`skillSection ${clickedElements.includes(2) ? 'clicked' : ''}`} onClick={() => handleClick(2)}>DevOps</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsHero;