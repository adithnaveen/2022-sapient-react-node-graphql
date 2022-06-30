import React, { Component } from 'react'

import ContactList from './ContactList';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    state = {
        contacts: []
    }

    componentDidMount() {
        fetch("http://localhost:4000/contacts")
            .then(resp => resp.json())
            .then(data => this.setState({ contacts: data }));
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ContactList contacts={this.state.contacts} />
                    </div>
                    <div className="col">
                        <h2>Products List To Go Here</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;