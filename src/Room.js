import React, {useState}  from 'react';
import './Room.css'

function Room() {
    let [isLit, setLit] = useState(true);
    function updateLit()
    {
        console.log("Button Clicked");
        setLit(!isLit);
    }
    function updateLitOn()
    {
        console.log("On Button Clicked");
        if (!isLit)
        {setLit(!isLit);}
    }
    function updateLitOff()
    {
        console.log("Off Button Clicked");
        if (isLit)
            {setLit(!isLit);}
    }
  
    return (
      <div className ={"room " +(isLit? "lit":"dark")}>
          <h1>BootCamp 2020 Class 4 : React State</h1>
          <h2>Assignment - Add On Off Button</h2>
          <h3>Submitted by Muhammad Javaid Nawab</h3>
          This is Room is : {isLit? "lit":"dark"}
         
         
          <br/>
          <button onClick ={updateLitOn}>ON</button>
          <br/>
          <button onClick ={updateLitOff}>OFF</button>
          <br/> <button onClick ={updateLit}>Toggle Light</button>
      
      </div>
    );
  }
  
  export default Room;