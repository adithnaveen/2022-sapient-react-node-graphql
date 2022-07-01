import React, { Component } from 'react'
// connect is HOC 
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/contacts-action';

import ContactCard from './ContactCard'

class ContactList extends Component {

    componentDidMount() {
        this.props.getAllContacts();
    }

    render() {

        let list = null;
        let { contacts } = this.props;

        if (contacts instanceof Array && contacts.length > 0) {
            list = contacts.map(c => <ContactCard contact={c} key={c.id} />)
        }

        return (
            <div className="container">
                <h3>Contact List</h3>
                {list}
            </div>
        );
    }
}

const stateAsProps = (reducer) => {
    return {
        contacts: reducer.contactsReducer.contacts
    }
}

const actionAsprops = {
    getAllContacts: fetchContacts
}

export default connect(stateAsProps, actionAsprops)(ContactList); 