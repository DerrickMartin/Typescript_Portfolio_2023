import React from "react";
import './ProjectsStyle.css';
import ReactSvg from '../../../assets/svgs/react_logo.svg';


const ReactProjects: React.FC = () => {
  return (
    <div className="caroselContainer">
        <img
          className="svg"
          src={ReactSvg}
          alt="React Svg"/>
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

export default ReactProjects;
