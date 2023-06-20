import React from "react";
import './ProjectsStyle.css';
import handTrackingSvg from '../../../assets/svgs/projects/handTracking.svg';


const HandTrackingProjects: React.FC = () => {
  return (
    <div className="caroselContainer">
        <img
          className="svg"
          src={handTrackingSvg}
          alt="Hand Tracking"/>
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

export default HandTrackingProjects;
