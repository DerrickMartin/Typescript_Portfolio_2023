import React from "react";
import './ProjectsStyle.css';
import machineLearningSvg from '../../../assets/svgs/backend/ai_logo.svg';

const MachineLearningProjects: React.FC = () => {
  return (

    <div className="caroselContainer">
        <img
          className="svg"
          src={machineLearningSvg}
          alt="Machine Learning"/>
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
