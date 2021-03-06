// fetching data from end point 

import { useFetch } from "../custom-hooks/useFetch"



function App({ login }) {
    const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`);


    if (loading) return <h1>Loading</h1>
    if (error) return <pre>{JSON.stringify(error, null, 2)} </pre>
    return (
        <div>
            {/* <pre>{JSON.stringify(data, null, 2)} </pre> */}
            <img src={data.avatar_url} alt={data.login} style={{ height: 200 }} />
            <p>{data.login}</p>
            {data.name && <p>{data.name}</p>}
            {data.location && <p>{data.location}</p>}
        </div>
    )

}

export default App;