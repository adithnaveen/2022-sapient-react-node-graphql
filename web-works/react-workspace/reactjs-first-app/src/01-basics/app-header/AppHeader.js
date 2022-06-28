import React, { Component, Fragment } from 'react';

import './app-header.css';


class AppHeader extends Component {

    render() {

        return (
            <>
                <h1>Site for {this.props.title} Located At {this.props.location}</h1>
                <hr />
            </>
        );
    }
}

export default AppHeader;