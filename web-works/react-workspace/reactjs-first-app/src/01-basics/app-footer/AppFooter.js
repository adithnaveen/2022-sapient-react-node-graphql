import React from 'react';

import './app-footer.css';

export default function AppFooter(props) {
    return (
        <div>
            <hr />
            <p className='app-footer' >{props.website}, Copyright Reserved {props.year}, {props.company} </p>
        </div>
    )
}

