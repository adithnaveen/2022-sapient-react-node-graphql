// useEffect is side car which does work like logging, fetching etc... 
import React, { useEffect, useState } from 'react';



const App = () => {
    const [name, setName] = useState("Sailesh");
    const [developer, setDeveloper] = useState(false);

    // 1. when there is useEffect, which does not take any parameter then 
    // it will be called for any useState, or any loads 
    // 2. when you pass [] then useEffect will be called only once on page loads 
    // 3. the array can take use state variable, and it will be acted only on the specific useState 
    useEffect(() => {
        console.log(`This page has ${name} content`);
        document.title = `Page belogs to ${name} `;
    }, [name])

    useEffect(() => {
        console.log(`${name} is Developer : ${developer ? "yes" : "no"}`);
    }, [developer])

    useEffect(() => {
        console.log("Common logging... ");
    })


    return (
        <div>
            <h3>Hello Mr. {name}</h3>
            <h3>Is He Developer: {developer ? "Yes" : "No"}</h3>
            <button
                onClick={() => {
                    setName("Sailesh Patra")
                }}
            >Get Full Name</button>


            <button
                onClick={() => {
                    setDeveloper(true)
                }}
            >Is Developer</button>
        </div>
    );
}

export default App
