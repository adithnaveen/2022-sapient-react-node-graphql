import React, { useReducer } from 'react';


const App = () => {
    const [checked, toggle] = useReducer((checked) => !checked, false);
    const [counter, incrementor] = useReducer((number) => number + 1, 0)

    return (
        <div>
            <p>Check Status {checked ? "Checked" : "NOt Checked"}</p>
            <input type="checkbox" value={checked} onChange={toggle} />
            <hr />
            <h1 onClick={incrementor}>Click Me {counter} </h1>
        </div>
    )
}

export default App;