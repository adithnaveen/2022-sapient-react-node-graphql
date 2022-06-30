import React, { useState, useEffect } from 'react';

import { Title, Title2 } from '../style/titles';


const App = () => {
    // write useEffect then useState, to avoid warning 

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then(resp => resp.json())
            .then(setData);
    }, [])

    const [data, setData] = useState([]);

    if (data.length > 0) {
        return (
            <div>
                <Title>List of Logins got </Title>
                <Title2>Hello again... </Title2>
                <ul>
                    {
                        data.map((user, index) => (
                            <li key={user.id}>{user.login}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }

    return <p>Sorry No Data...</p>
}

export default App; 