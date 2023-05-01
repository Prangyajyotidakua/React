import React, { useState } from "react";

function App() {
    const [headingText, setHeadingText] = useState("hello");
    const [isMouseOver, setMouseOver] = useState(false);
    const [name, setName] = useState("");

    function handleClick() {
        setHeadingText("submitted by");
//or setHeadingText(name);
   
    }
    function handleMOuseOver() {
        setMouseOver(true);
    }
    function handleMOuseOut() {
        setMouseOver(false);
    }
    function handleChange(event) {
     setName(event.target.value);
    }
    return (
        <div className="container">
            <h1>{headingText} {name} </h1>
            <input
                onChange={handleChange}
                type="text" placeholder="What's your name?"
                value={name}
            />
            <button
                style={{ background: isMouseOver ? "black" : "white" }}
                onClick={handleClick}
                onMouseOver={handleMOuseOver}
                onMouseOut={handleMOuseOut}
            >Submit</button>
        </div>
    );
}

export default App;
