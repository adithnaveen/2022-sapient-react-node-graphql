import React, { Component } from 'react';


import './app-component.css';



export default class AppComponent extends Component {
    render() {
        const msg = "Hello World";

        return (
            <div className='app-component'>
                <h1>{msg} to React from {this.props.name}</h1>
            </div>
        );
    }
}