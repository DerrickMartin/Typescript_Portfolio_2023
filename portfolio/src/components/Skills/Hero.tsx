import React, { useState } from 'react';
import './Hero.css';
import devOpsSvg from '../../assets/svgs/cloud/devops_logo.svg';
import jsSvg from '../../assets/svgs/javascript_logo.svg';
import pythonSvg from '../../assets/svgs/backend/python_logo.svg';

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
        <div className="skillCategory">
          <div className="skillBox">
            <h3
              className={`skillSection ${clickedElements.includes(0) ? 'clicked' : ''}`}
              onClick={() => handleClick(0)}
            >
              FrontEnd
            </h3>
            <div className={`DevOps ${clickedElements.includes(0) ? 'visible' : ''}`}>
              <img
              className={`python ${clickedElements.includes(0) ? 'visible' : ''}`}
              src={pythonSvg}
              alt="Python"
              style={{ width: '52px', height: '52px' }}/>
            </div>
          </div>
          <div className="skillBox">
            <h3
              className={`skillSection ${clickedElements.includes(1) ? 'clicked' : ''}`}
              onClick={() => handleClick(1)}
            >
              BackEnd
            </h3>
            <div className={`DevOps ${clickedElements.includes(1) ? 'visible' : ''}`}>
              <img
              className={`python ${clickedElements.includes(1) ? 'visible' : ''}`}
              src={jsSvg}
              alt="Javascript"
              style={{ width: '52px', height: '52px' }}/>
            </div>
          </div>
          <div className="skillBox">
            <h3
              className={`skillSection ${clickedElements.includes(2) ? 'clicked' : ''}`}
              onClick={() => handleClick(2)}
            >
              DevOps
            </h3>
            <div className={`DevOps ${clickedElements.includes(2) ? 'visible' : ''}`}>
              <img
              className={`python ${clickedElements.includes(2) ? 'visible' : ''}`}
              src={devOpsSvg}
              alt="DevOps"
              style={{ width: '52px', height: '52px' }}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsHero;
