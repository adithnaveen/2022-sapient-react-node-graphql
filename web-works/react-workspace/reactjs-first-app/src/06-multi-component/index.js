import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'

import ContactList from './ContactList';
import ContactForm from './ContactForm';

class App extends Component {


    addContact = (contact) => {
        let { contacts } = this.state;
        contacts.unshift(contact);
        // render is called here 
        this.setState({ contacts });
    }

    deleteContact = (id) => {
        let { contacts } = this.state;
        let index = contacts.findIndex(c => c.id === id);
        if (index !== -1) {
            contacts.splice(index, 1)
            this.setState({ contacts })
        }
    }




    state = {
        contacts: [
            {
                "id": 1,
                "name": "Justen",
                "gender": "Male",
                "email": "jbridgland0@sourceforge.net",
                "phone": "782-970-0958",
                "pic": "https://randomuser.me/api/portraits/men/4.jpg"
            },
            {
                "id": 2,
                "name": "Renelle",
                "gender": "Female",
                "email": "rmcmichan1@irs.gov",
                "phone": "343-352-1408",
                "pic": "https://randomuser.me/api/portraits/women/4.jpg"
            },
            {
                "id": 3,
                "name": "Cayla",
                "gender": "Male",
                "email": "cspeachley2@ustream.tv",
                "phone": "635-869-0818",
                "pic": "https://randomuser.me/api/portraits/men/5.jpg"
            },
            {
                "id": 4,
                "name": "Doll",
                "gender": "Male",
                "email": "dmeryett3@ask.com",
                "phone": "795-902-7687",
                "pic": "https://randomuser.me/api/portraits/men/6.jpg"
            },
            {
                "id": 5,
                "name": "Lincoln",
                "gender": "Female",
                "email": "lcanavan4@businessinsider.com",
                "phone": "534-161-4091",
                "pic": "https://randomuser.me/api/portraits/women/6.jpg"
            }
        ]
    }


    render() {
        return (
            <div className="container">
                <h2 className="alert alert-info">Contact Application </h2>

                <div className="row">
                    <div className="col-md-5">
                        <ContactForm addContact={this.addContact} />
                    </div>
                    <div className="col-md-7">

                        <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact} />

                    </div>
                </div>

            </div>
        );
    }
}

export default App;