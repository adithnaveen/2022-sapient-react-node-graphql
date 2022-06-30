import React, { Component } from 'react';


// OldComponent = ContactList 
// version 1.0 
/* 
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
} */


function isEmpty(data) {
    if (data && data instanceof Array) {
        return data.length === 0;
    }

    // if data not array 
    if (data) {
        return Object.keys(data).length === 0;
    }

    return false;
}

// const Loading = (property) =>  (OldComponent) => (props) => {}

// version 2.0 
/* 

const Loading = (OldComponent) => (props) => {
    let output = <OldComponent {...props} />

    if (isEmpty(props.contacts)) {
        output = <h3 className='alert alert-danger'>Loading Please wait... </h3>
    }

    return output;
}
 */


// version 3.0 
const Loading = (property) => (OldComponent) => (props) => {
    let output = <OldComponent {...props} />

    if (isEmpty(props[property])) {
        output = <h3 className='alert alert-danger'>Loading Please wait... </h3>
    }

    return output;
}



export default Loading; 