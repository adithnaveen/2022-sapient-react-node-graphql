import React, { Component } from 'react'

import ContactCard from './ContactCard'
import Loading from './Loading';


class ContactsList extends Component {

    render() {
        let list = this.props.contacts.map(
            c => <ContactCard key={c.id} contact={c} />)

        return (
            <div className="container">
                <h3>Contact List</h3>
                {list}
            </div>
        );
    }
}

export default Loading('contacts')(ContactsList);



// export default Loading('accounts')(AccountList);
// export default Loading('products')(ProductList);