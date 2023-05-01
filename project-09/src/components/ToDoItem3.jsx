import React from "react";

function ToDoItem3(props) {
    return (
        <div
            onClick={() => {
                props.onChecked(props.id);
            }}
        >
            <li>{props.text}</li>
        </div>
    );
}

export default ToDoItem3;
