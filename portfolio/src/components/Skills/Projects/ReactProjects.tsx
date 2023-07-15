import React, {useState} from "react";
import './ProjectsStyle.css';
import ReactSvg from '../../../assets/svgs/react_logo.svg';


const ReactProjects: React.FC = () => {
  const [showModule, setShowModule] = useState(false);

  const handleClick = () => {
    setShowModule(!showModule);
  };
  return (
    <div className="caroselContainer">
        <img
          className="svg"
          src={ReactSvg}
          alt="React Svg"/>
      <div id="container">
        <div className="square" onClick={handleClick}></div>
        {showModule && (
        <div className="opacityBackground" onClick={handleClick}>
        <div className="reactProject1">
          <button className="closeButton" onClick={handleClick}>
            X
          </button>
          <h2>Module Content</h2>
          <p>This is the module content.</p>
        </div>
        </div>
      )}
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </div>
    );
};

export default ReactProjects;
