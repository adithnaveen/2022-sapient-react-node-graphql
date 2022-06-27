import React, { Component } from 'react';


import './app-component.css';

export default class AppComponent extends Component {
    render() {
        const msg = "Hello World";
        const name = 'Sandeep Verma';
        return (
            <div className='app-component'>

                <h1>{msg} to React from {name}</h1>

            </div>
        );
    }
}