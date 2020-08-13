import React, {useState}  from 'react';
 

function Room() {
    let [isLit, setLit] = useState(true);
    function updateLit()
    {
        console.log("Button Clicked");
        setLit(!isLit);
    }
  
    return (
      <div>
          This is Room is : {isLit? "lit":"dark"}
          <button onClick ={updateLit}>Toggle Light</button>
      </div>
    );
  }
  
  export default Room;