import React, { useState } from 'react'

function App() {

    const [name, setName] = useState("Pen");
    const [count, setCount] = useState(0);
    const [checked, setChecked] = useState(false);
    return (
        <div>
            <h1>This is inside function value : {name}</h1>
            <h2>Count Value : {count} </h2>
            Checked Status : {checked ? "Checked" : "Unchecked"}

            <br />
            <input type='checkbox' value={checked}
                onChange={() => {
                    setChecked((checked) => !checked);
                }}
            />
            <button
                onClick={() => {
                    setName("Fountain Pen")
                }}
            >Click Me</button>

            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >Increment</button>


        </div>
    )
}

export default App;