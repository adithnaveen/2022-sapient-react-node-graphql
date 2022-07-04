// creating controlled component with state / useState 

import React, { useState } from 'react';


const App = () => {

    const [name, setName] = useState("");
    const [city, setCity] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        alert(`${name} LIVES IN ${city}`);

        setName("");
        setCity("");
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                Enter Name <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter Your Name ' /><br />

                Enter City <input type="text" value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='Enter Your City ' /> <br />

                <button>Add Contact</button>
            </form>
        </>
    )
}

export default App;