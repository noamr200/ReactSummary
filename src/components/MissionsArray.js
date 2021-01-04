import Mission from "../models/Mission";
import React from 'react';
import MissionComponent from "./MissionComponent";
function MissionsArray(props)
{
    let MissionsArray=[];
    let g=props.get1;
    let carRows;

  //  React.useEffect(()=>{
    MissionsArray=g;
    carRows = MissionsArray.map((mission, index) => <MissionComponent   key={index} mission={mission}  />);
    console.log (g);
    console.log (carRows);
  //  },missions);
    
   /* function addMission(text)
    {
        var m=new Mission(text,true,false);
        MissionsArray.push(m);
        //setMissions(this.MissionsArray);
    }*/
   // carRows = MissionsArray.map((mission, index) => <MissionComponent   key={index} mission={mission}  />);
    return (<div><p>Missions:</p> {carRows} </div>);
}
export default MissionsArray;