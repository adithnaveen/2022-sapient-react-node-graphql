import React, { Component } from 'react';


class App extends Component {
    state = {
        contacts: []
    }

    // good place to get data 
    componentDidMount() {
        fetch("http://localhost:4000/contacts")
            .then(resp => resp.json())
            .then(data => this.setState({ contacts: data }));
    }

    render() {

        const contactsList = this.state.contacts.map(c => <ContactCard contact={c} />)
        return (
            <div className="container">
                <h1 className='alert alert-info'>Contacts list</h1>
                <h4>Number of contacts {this.state.contacts.length}</h4>

                {contactsList}
            </div>

        );
    }
}

export default App;