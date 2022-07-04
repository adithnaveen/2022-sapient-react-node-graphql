// working with useRef 

import React, { useRef } from 'react';

const App = () => {

    const name = useRef();
    const city = useRef();


    const submitHandler = (e) => {
        e.preventDefault();

        const nameValue = name.current.value;
        const cityValue = city.current.value;

        alert(`${nameValue} live in city ${cityValue}`)


        name.current.value = "";
        city.current.value = "";
        name.current.focus();
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                Enter Name <input type="text" ref={name} placeholder='Enter Your Name ' /><br />
                Enter City <input type="text" ref={city} placeholder='Enter Your City ' /> <br />

                <button>Add Contact</button>
            </form>
        </>
    )
}
export default App;