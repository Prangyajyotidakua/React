import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import pie, { doublepi, triplepi } from "./math.js"

//import everything from the file we use * as name
import * as pi from "./math.js"

import * as math from "./calculate.js"

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
 //   <App />

 //another type is 
    <div>
      <ul>
      <li>{pie}</li>
      <li>{doublepi()}</li>
      <li>{triplepi()}</li>
      <li>{pi.default}</li>
      <li>{pi.doublepi()}</li>
      <li>{pi.triplepi()}</li>
      <li>{math.add(2,3)}</li>
      <li>{math.subtract(7,1)}</li>
      <li>{math.multiply(3,5)}</li>
      <li>{math.divide(9,3)}</li>

      </ul>
      


    </div>,document.getElementById("root")
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
