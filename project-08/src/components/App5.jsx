//ES6
/*
const citrus == ["lime" , "lemon" , "orange"];
//add speared operator 
const fruits = ["apple" ,...citrus, "bananna" , "grapes" , ...citrus]

const fullName = {
    fName:"prangya",
    lName:"jyoti"
}

const user ={
    ...fullName,
    id:1,
    username: "prangyajyoti092"
};

*/


import React, { useState } from "react";

function App5() {
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        /* setContact(prevValue =>
             ({...prevValue , [name] : value})); */
        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };

        });
    }

    return (
        <div className="container">
            <h1>
                Hello {contact.fName} {contact.lName}
            </h1>
            <p>{contact.email}</p>
            <form>
                <input
                    onChange={handleChange}
                    name="fName"
                    value={contact.fName}
                    placeholder="First Name"
                />
                <input
                    onChange={handleChange}
                    name="lName"
                    value={contact.lName}
                    placeholder="Last Name"
                />
                <input
                    onChange={handleChange}
                    name="email"
                    value={contact.email}
                    placeholder="Email"
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App5;
