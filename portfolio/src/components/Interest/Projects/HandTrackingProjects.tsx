import React from "react";
import './HandTrackingProjects.css';
import handTrackingSvg from '../../../assets/svgs/projects/handTracking.svg';


const HandTrackingProjects: React.FC = () => {
  return (
    <div className="caroselContainer">
        <img
          src={handTrackingSvg}
          alt="Hand Tracking"
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

export default HandTrackingProjects;
