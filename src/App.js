import React, { useState } from 'react';
import './App.css';
import ToolTips from './Components/Tooltip_Com';

const App = () => {
  const [position, setPosition] = useState("top");
  const handleClick = (value) => {
    setPosition(value);
  }
  return (
    <div className='container'>
      <div className="header">
        <h1>React Tooltip</h1>
        <div className="center">
          <button className="button" onClick={() => handleClick("top")}>Top</button>
          <button className="button button2" onClick={() => handleClick("left")}>Left</button>
          <button className="button button3" onClick={() => handleClick("right")}>Right</button>
          <button className="button button4" onClick={() => handleClick("bottom")}>Bottom</button>
        </div>
        <ToolTips position={position} />
      </div>
    </div>
  );
}

export default App
