import React from 'react';
import { FaBeer } from 'react-icons/fa';
import '../components/MissionComponent.css';
function MissionComponent(props)
{
    const [deleted,setDeleted]=React.useState("content");
    let m=props.mission;
    let del=props.del;
      React.useEffect(()=>{
          if (m.isCompleted===true)
        setDeleted("content deleted");
        else 
        {
            setDeleted("content");
        }
      },[m.isCompleted]);
    function ToggleActive()
    {
      setDeleted(m.isCompleted);
       m.isCompleted=!m.isCompleted;
       if (m.isCompleted===true)
       setDeleted(" content deleted");
       else 
       {
        setDeleted(" content");
       }
    }
    function deleteMe()
    {
        if (!m.isCompleted) 
        {
            let confirm=window.confirm("Your Mission was not completed are you sure you want to delete it?");
            if (confirm===false)
            {
                return;
            }
        }

        m.IsMarkedForDeletion=true;
        del();
    }
    return (<div> <input type="checkbox" onChange={ToggleActive} checked={m.isCompleted}/>
     <span className={deleted}>{m.content}   <FaBeer className="delete" onClick={deleteMe}/></span>
      </div>)
}
export default MissionComponent;