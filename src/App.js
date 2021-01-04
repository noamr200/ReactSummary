import './App.css';
import React, { useState } from 'react';
import MissionsArray from "./components/MissionsArray";
import Mission from './models/Mission';
function App() {
  const [missions,setMission]=useState([]);
  const [filter,SetFilter]=useState("none");
  const [tempTxt,setTempTxt]=useState("");
  function removedDeleted()
  {
    for (let i=0;i<missions.length;++i)
    {
      if (missions[i].IsMarkedForDeletion)
      {
        let index=i;
        setMission(missions.filter((_, i1) => i1 !== index));
      }

    }
  }
  
  function updateTempMission(e)
  {
    let txt=e.target.value;
    setTempTxt(txt);
  }
  function submit()
  {
    if (tempTxt.length===0) 
    {
      alert("Cannot submit empty tasks!");
      return;
    }
    let m=new Mission(tempTxt,false,false);
    setMission(missions.concat(m));
    setTempTxt("");
  }
  function setAll()
  {
    SetFilter("none");
  }
  function setActive()
  {
    SetFilter("active");
  }
  function setCompleted() 
  {
    SetFilter("completed");
  }

  return (
    <div className="App">
      <div className="App-header">
     <h1>Todos</h1>
     <textarea placeholder="What's Next?" onChange={updateTempMission}  value={tempTxt} ></textarea>
     <button onClick={submit} >Sumbit</button>
     <MissionsArray appMissions={missions} del={removedDeleted}  filter={filter}/>
     <div className="btn-group">
  <button onClick={setAll}>ALL</button>
  <button onClick={setActive}>Active</button>
  <button onClick={setCompleted}>Completed</button>
  </div>

      </div>
    </div>
  );
}

export default App;
