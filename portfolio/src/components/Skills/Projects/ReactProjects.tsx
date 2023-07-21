import React, {useState} from "react";
import './ProjectsStyle.css';
import ReactSvg from '../../../assets/svgs/react_logo.svg';



  const ReactProjects: React.FC = () => {
    const [clickedElements, setClickedElements] = useState<number[]>([]);
  
    const handleClick = (index: number) => {
      setClickedElements(prevState => {
        if (prevState.includes(index)) {
          return prevState.filter(item => item !== index);
        } else {
          return [...prevState, index];
        }
      });
    };
  
  return (
    <div className="carouselContainer">
      <img className="svg" src={ReactSvg} alt="React Svg" />
      <div id="container">
        {/* Square 1 */}
        <div className="square" onClick={() => handleClick(0)}></div>
        {clickedElements.includes(0) && (
          <div className="opacityBackground">
            <div className="reactProject">
              <button className="closeButton" onClick={() => handleClick(0)}>
                X
              </button>
              <h2>Module Content 1</h2>
              <p>This is the module content for square 1.</p>
            </div>
          </div>
        )}

        {/* Square 2 */}
        <div className="square" onClick={() => handleClick(1)}></div>
        {clickedElements.includes(1) && (
          <div className="opacityBackground">
            <div className="reactProject">
              <button className="closeButton" onClick={() => handleClick(1)}>
                X
              </button>
              <h2>Module Content 2</h2>
              <p>This is the module content for square 2.</p>
            </div>
          </div>
        )}

        {/* Square 3 */}
        <div className="square" onClick={() => handleClick(2)}></div>
        {clickedElements.includes(2) && (
          <div className="opacityBackground">
            <div className="reactProject">
              <button className="closeButton" onClick={() => handleClick(2)}>
                X
              </button>
              <h2>Module Content 3</h2>
              <p>This is the module content for square 3.</p>
            </div>
          </div>
        )}

        {/* Add more squares as needed */}
      </div>
    </div>
  );
};


export default ReactProjects;
