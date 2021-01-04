import React from 'react';
import MissionComponent from "./MissionComponent";
function MissionsArray(props)
{
    let MissionsArray=[];
    let g=props.get1;
    let carRows;
    let del=props.del;
    let filter=props.filter;
  //  React.useEffect(()=>{
    MissionsArray=g;
    let finalArray=[];
    
    for (let i=0;i<MissionsArray.length;++i)
    {
        
        if (filter==="active")
        {
            if (MissionsArray[i].isCompleted===false)
            {
                finalArray.push(MissionsArray[i]);
            }
        }

        else if (filter==="completed")
        {
            if (MissionsArray[i].isCompleted===true)
            {
                finalArray.push(MissionsArray[i]);
            }
        }
        else if (filter==="none")
        {
            finalArray.push(MissionsArray[i]);
        }
    }
    carRows = finalArray.map((mission, index) => <MissionComponent   key={index} mission={mission} del={del}  />);
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