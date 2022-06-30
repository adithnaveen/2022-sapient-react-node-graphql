import React, { Component } from 'react';


// OldComponent = ContactList 

function Loading(OldComponent) {
    return class NewComponent extends Component {
        render() {
            let output = <OldComponent {... this.props} />

            if (this.props.contacts.length === 0) {
                output = <h3 className='alert alert-danger'>Loading Please wait... </h3>
            }

            return output;
        }
    }
}

export default Loading; 