import React, { Component } from 'react';
import { connect } from 'react-redux';


class ContactDetails extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <h3>Contact Details</h3>
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

export default ContactDetails;