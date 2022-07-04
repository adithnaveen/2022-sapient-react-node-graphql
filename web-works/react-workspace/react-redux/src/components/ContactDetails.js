import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContactById } from '../actions/contacts-action';

class ContactDetails extends Component {

    render() {

        let { id } = this.props.match.params;



        return (
            <div className="container">
                <h3>Contact Details of {id}</h3>
                <div className="row">
                    <div className="col-md-4">
                        Image
                    </div>
                    <div className="col-md-8">

                        Details

                    </div>
                </div>
            </div>
        );
    }
}

let stateAsProps = (reducer) => ({
    contact: reducer.contactsReducer.contact
});
let actionAsProps = { getContact: getContactById }

export default connect(stateAsProps, actionAsProps)(ContactDetails);