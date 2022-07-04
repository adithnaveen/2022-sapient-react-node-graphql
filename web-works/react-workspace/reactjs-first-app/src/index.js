
import ReactDOM from 'react-dom/client';
import React, { createContext, useContext } from 'react';

// import App from './01-basics';
// import App from './02-events';
// import App from './03-ctrl-unctrl';
// import App from './03-ctrl-unctrl/index-ctrl';
// import App from './04-life-cycle';
// import App from './05-contacts-fetch';
// import App from './06-multi-component';
// import App from './07-hoc';
// import App from './08-virtual-dom';
import App from './09-hooks';


// good idea to keep all your context created here 
const CitiesContext = createContext()
export const useCities = () => useContext(CitiesContext);


const cities = [
    { id: 1, name: "Bengaluru" },
    { id: 2, name: "Delhi" },
    { id: 3, name: "Mumbai" },
    { id: 4, name: "Chennai" },
    { id: 5, name: "Kolkatta" }
];


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CitiesContext.Provider value={{ cities }}>
        <App />
    </CitiesContext.Provider>
);























// working with Virtual Dom 

// working with dom 
// let h1 = document.createElement("h1");
// h1.setAttribute('id', 'heading1');
// h1.innerHTML = 'Welcome to React JS';
// document.getElementById('root').appendChild(h1);

// let count = 1;
// setInterval(() => {
//     let h1 = document.getElementById("heading1");
//     h1.innerHTML = 'Welcome to React JS';
//     console.log("updating heading " ,  count++ , " times ");
// }, 1000);