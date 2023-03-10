import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import App2 from './components/App2';
const root = ReactDOM.createRoot(document.getElementById('root'));
/*var num = [3,56,2,48,5];
const newnum = num.map(x => x*2 );
console.log(newnum)
const newnum2 = num.reduce((accumulator,currentNumber) =>
accumulator + currentNumber );
console.log(newnum2)*/
root.render(
<App2/>
/*<React.StrictMode>
    <App />
  </React.StrictMode>*/
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

