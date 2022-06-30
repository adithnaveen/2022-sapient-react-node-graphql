const ContactCard = ({ contact }) => (
    <div className="card" style={{ width: '700px', height: '180px', margin: '10px', padding: '10px' }}>
        <div className="row">

            <div className="col-md-4">
                <img src={contact.pic} alt={contact.name} className="card-img"
                    style={{ width: "120px", height: "120px" }} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h4 className="card-title">{contact.gender === 'Male' ? "Mr. " : "Ms/Mrs. "}{contact.name}

                    </h4>
                    <h4 className="card-text">{contact.email}</h4>
                    <h4 className="card-text">{contact.phone}</h4>

                    <div className="col-md-1">

                    </div>

                </div>
            </div>
        </div>
    </div>
)
export default ContactCard; 