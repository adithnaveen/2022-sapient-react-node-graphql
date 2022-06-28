import React from 'react';

import './app-footer.css';

const AppFooter = ({ website, year, company }) => {
    return (
        <div>
            <hr />
            <p className='app-footer' >{website}, Copyright Reserved {year}, {company} </p>
        </div>
    )
}

export default AppFooter;