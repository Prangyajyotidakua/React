import React, { useState } from "react";

function ToDoItem(props) {
    const [isDone, setIsDone] = useState(false);
    function handleChange() {
        setIsDone(prevValue => {
            return !prevValue;
        });
    }
    return (
        <div onClick={handleChange}>
            <li  style={{ textDecoration: isDone ? "line-Through" : "none" }}>{props.text}</li>
        </div>
    );
}

export default ToDoItem;


