import React, { useState } from "react";

function App2() {
   
    const[FName , setFname] = useState("");
    const[LName , setLname] = useState("");
  function handleFname(event){
    setFname(event.target.value);
  }
  function handleLname(event){
    setLname(event.target.value);
  }
    return (
    <div className="container">
      <h1>Hello {FName} {LName} </h1>
      <form>
        <input onChange={handleFname} name="fName" placeholder="First Name" value={FName}/>
        <input onChange={handleLname} name="lName" placeholder="Last Name" value={LName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App2;
