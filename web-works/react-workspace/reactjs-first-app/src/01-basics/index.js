import React, { Component } from 'react';
import AppHeader from './app-header/AppHeader';
import AppFooter from './app-footer/AppFooter'
import AppComponent from './app-component'

import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {

    render() {

        const footerProps = {
            company: "Publicis Sapient",
            year: 2022,
            website: "ps.com"
        };
        return (

            <div>
                <AppHeader title="Publicis Sapient" location="Bengaluru" />
                <AppComponent name="Sandeep" />
                {/* <AppFooter company={footerProps.company} year={footerProps.year} website={footerProps.website} /> */}


                <AppFooter
                    {...footerProps} />
            </div>
        );
    }
}


export default App;