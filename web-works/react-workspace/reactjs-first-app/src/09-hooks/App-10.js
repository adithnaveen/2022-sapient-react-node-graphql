import React from 'react';

import { useCities } from '..';
function App() {

    const { cities } = useCities();

    return (
        <div>
            <h1>The Cities In India</h1>
            <ul>
                {
                    cities.map(city => <li key={city.id}>{city.name}</li>)
                }
            </ul>
        </div>
    )
}
export default App;