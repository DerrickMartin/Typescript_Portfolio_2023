import React from "react";

import 'MachineLearning.css';
import MachineLearningProjects from "./Projects/MachineLearningProjects";


const MachineLearning: React.FC = () => {
  return (
    <div className="container">
      <h2>Machine Learning</h2>
      <p>Here are a few examples of Machine Learning</p>
      <MachineLearningProjects />
    </div>
  );
};

export default MachineLearning;
