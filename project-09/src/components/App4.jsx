import React, { useState } from "react";
import ToDoItem3 from "./ToDoItem3";
import InputArea from "./InputArea";
function App4() {
    const [items, setItems] = useState([]);

    
    function addItem(inputText) {
        setItems(prevItems => {
            return [...prevItems, inputText];
        });
    }

    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea
            onAdd={addItem}
            />
            <div>
                <ul>
                    {items.map((todoItem, index) => (
                        <ToDoItem3
                            key={index}
                            id={index}
                            text={todoItem}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App4;
