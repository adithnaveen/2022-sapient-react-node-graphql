import React, { Component } from 'react';
import AppHeader from './app-header/AppHeader';
import AppFooter from './app-footer/AppFooter'
import AppComponent from './app-component'

class App extends Component {

    render() {
        return (

            <div>
                <AppHeader />
                <AppComponent />
                <AppFooter />
            </div>
        );
    }
}


export default App;