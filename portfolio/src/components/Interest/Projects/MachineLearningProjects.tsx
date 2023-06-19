import React from "react";
import './MachineLearningProjects.css';
import machineLearningSvg from '../../../assets/svgs/backend/ai_logo.svg';

const MachineLearningProjects: React.FC = () => {
  return (

    <div className="caroselContainer">
        <img
          src={machineLearningSvg}
          alt="Machine Learning"
          style={{ width: '6rem', height: '6rem' }}/>
      <div id="container">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </div>
    );
};

export default MachineLearningProjects;
