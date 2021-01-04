import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MissionsArray from "./components/MissionsArray";
import Mission from './models/Mission';
function App() {
  const [missions,setMission]=useState([]);
  const [tempTxt,setTempTxt]=useState("");
  function updateTempMission(e)
  {
    let txt=e.target.value;
    setTempTxt(txt);
  }
  function submit()
  {
    let m=new Mission(tempTxt,true,false);
    console.log (m);
    setMission(missions.concat(m));
  }
  
  return (
    <div className="App">
      <header className="App-header">
     <h1>Todos</h1>
     <textarea placeholder="What's Next?" onChange={updateTempMission} ></textarea>
     <button onClick={submit}>Sumbit</button>
     <MissionsArray get1={missions} />
      </header>
    </div>
  );
}

export default App;
