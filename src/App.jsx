import './App.css';
import React, { useState } from "react";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput"; 
import "./components/User.css"

function App() {

  const [changeOutput, setChangeOutput] = useState("Cutsi");
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    console.log(Math.random().toString());
    setChangeOutput(Math.random().toString());
  };

  const dinamicChange = (event) => {
    setChangeOutput(
      event.target.value
    );
  };

  const toggleOutput = () => {
    setToggle(!toggle);
    /* outputShow() */
  };

  const style = {
    backgroundColor: "salmon",
    borderRadius: "1rem"
  };

  /* const outputShow = () => {
    if(toggle){
      <UserOutput style={style} username={changeOutput}></UserOutput>
    }else{ 
    }
  } */

  
  return (
    <div className="App">
      <UserInput onChange={handleChange} writting={dinamicChange}/>
      <button className="button-class" onClick={handleChange}>Testing</button>
      <input type="checkbox" onChange={toggleOutput} /> 
      <label htmlFor="">Hide/Display Output</label>
      {/* {outputShow} */}
      
      { toggle ?
        <UserOutput style={style} username={changeOutput} />
        : null
      }
    </div>
  );
}

export default App;

