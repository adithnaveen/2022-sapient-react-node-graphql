import React, { useReducer } from 'react';

const initialState = {
    message: "Hello React Class"
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'good-morning':
            return { message: "In Eng - GOOD MORNING" }

        case 'good-night':
            return { message: "In Eng - GOOD NIGHT" }
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>Message : {state.message}</p>
            <button onClick={() => dispatch({ type: 'good-morning' })}>Say Good Morning</button>
            <button onClick={() => dispatch({ type: 'good-night' })}>Say Good Night</button>
        </>
    )
}


export default App;
