import React from "react";
import './HandTracking.css';
import HandTrackingProjects from './Projects/HandTrackingProjects';

const HandTracking: React.FC = () => {
  return (
    <div className="container">
      <h2>Hand Tracking</h2>
      <p>Here are some small projects using Hand Tracking</p>
        <HandTrackingProjects />
      </div>
  );
};

export default HandTracking;
