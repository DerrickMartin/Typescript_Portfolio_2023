import React from "react";
import './ProjectsStyle.css';
import PythonSvg from '../../../assets/svgs/backend/python_logo.svg';

const MachineLearningProjects: React.FC = () => {
  return (

    <div className="caroselContainer">
        <img
          className="svg"
          src={PythonSvg}
          alt="Python Svg"/>
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
