import React,{useState} from 'react';
import './App.css'

import Timer from './components/Timer';

const App = () => {
  const [start, getStart] =useState(false);
  const label = !start ? "Start":"Pause"
  return (
    <div className="app-container">
      <div className="button-start">
       <button className="btn-start" onClick={() => {getStart(!start)}}>{label}</button>
        <Timer start={start}/>
      </div>
    </div>
  );
}

export default App;
