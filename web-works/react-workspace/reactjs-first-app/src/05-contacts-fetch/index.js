import React, { Component } from 'react';

import ContactCard from './ContactCard';

import 'bootstrap/dist/css/bootstrap.css';

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


        const newContacts = [
            {
                "id": 1,
                "name": "Jerrie Bourges",
                "email": "jbourges0@edublogs.org",
                "gender": "Female",
                "phone": "119-501-9683",
                "pic": "https://randomuser.me/api/portraits/women/40.jpg"
            },
            {
                "id": 2,
                "name": "Maribelle Illesley",
                "email": "millesley1@fc2.com",
                "gender": "Female",
                "phone": "796-876-3388",
                "pic": "https://randomuser.me/api/portraits/women/39.jpg"
            }];


        const contactsList = this.state.contacts.map(c => <ContactCard contact={c} key={c.id} />);

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