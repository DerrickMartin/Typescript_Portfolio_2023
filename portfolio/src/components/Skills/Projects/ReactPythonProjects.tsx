import React from 'react';
import ReactProjects from './ReactProjects';
import PythonProjects from './PythonProjects';

const ReactPythonProjects: React.FC = () => {
  return (
    <div className='projects'>
      <p>Here are some projects I created using React.</p>
      <ReactProjects />
      <p>Here are some projects I created using Python.</p>
      <PythonProjects />
    </div>
  );
};

export default ReactPythonProjects;