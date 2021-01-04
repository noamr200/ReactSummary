import React from 'react';
import { FaBeer } from 'react-icons/fa';
function MissionComponent(props)
{
    const [checked,setChecked]=React.useState(false);
    let m=props.mission;
    function ToggleActive()
    {
        m.isActive=checked;
        m.isActive=!m.isActive;
        setChecked(m.isActive);
    }
    return (<div> <input type="checkbox" onChange={ToggleActive} checked={checked}/> <span>{m.content}</span>
     <div className="delete"> <FaBeer/></div>  </div>)
}
export default MissionComponent;