import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App2() {
    return (
        <div className="container">
            <Form
                isRegistered={userIsRegistered}
            />
        </div>
    );
}

export default App2;






















/*
import React from 'react';
import Input from './Input';
import Login from './Login';
import Form from './Form';
var isLoggedIn=false;
var userIsRegistered = false


function App2() {
    <Form
        isRegistered = {userIsRegistered}
    />


   /* return (
        <div className="container">
         {  isLoggedIn===true ? 
         <h1>Hello</h1> : <Login/>       }      
        </div>
    );*/












/*
function renderConditionally() {
    if (isLoggedIn === true) {
        return <h1>Hello</h1>;

    } else {
        return (
            <Login/>
        );
    }

} 





*/