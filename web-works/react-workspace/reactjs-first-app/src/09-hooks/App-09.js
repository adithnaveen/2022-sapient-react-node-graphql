// using custom hooks 

import { useInput } from '../custom-hooks/useInput'

const App = () => {
    const [nameProperty, resetName] = useInput("");
    const [cityProperty, resetCity] = useInput("");

    const submitHandler = (e) => {
        e.preventDefault();

        alert(`${nameProperty.value} is happily living in ${cityProperty.value}`);

        resetName();
        resetCity();
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                Enter Name <input type="text" {...nameProperty} placeholder="Enter Name" />
                Enter City <input type="text" {...cityProperty} placeholder="Enter City" />
                <button>Add Contact</button>
            </form>
        </>
    )
}

export default App;