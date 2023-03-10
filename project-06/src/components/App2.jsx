import React, { useState } from "react";

function App2() {
    //set interval
    setInterval(Refreshing, 1000);
    const [TIME, showTime] = useState(new Date().toLocaleTimeString());
    //set every single time on click the button or upto the interval
    function Refreshing() {
        showTime(new Date().toLocaleTimeString());
    }
    return (

        <div className="container">
            <h1>{TIME}</h1>
            <button onClick={Refreshing}>Get Time</button>
        </div>
    );
}

export default App2;
