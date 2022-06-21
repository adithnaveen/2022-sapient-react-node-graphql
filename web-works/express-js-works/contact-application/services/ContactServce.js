// shall have the serivce code / BL 

class ContactService {
    constructor() {
        this.data = {
            idCounter: 2,
            contacts: [
                { id: 1, name: "Rohit", email: "rohit@ps.com", phone: 7894561230, city: "Delhi" },
                { id: 2, name: "Ankit", email: "ankit@ps.com", phone: 4563214569, city: "Mumbai" },
            ]
        };
    }

    // getContact - by id 

    getContactById(id) {
        if (!id || typeof id !== 'number') {
            throw new Error("Sorry Please pass id as number / Missing");
        }

        const contact = this.data.contacts.find(c => c.id === id);

        if (contact) {
            console.log("Contact Found");
            return { ...contact };
        }
        return null;
    }

    // save Contact
    addContact(contact) {
        if (!contact || typeof contact !== 'object') {
            throw new Error("Contact is not a object");
        }

        const requireFields = ['name', 'email', 'phone', 'city'];
        const missingFields = [];

        requireFields.forEach((field) => {
            if (!(field in contact)) {
                missingFields.push(field);
            }
        });

        if (missingFields.length !== 0) {
            throw new Error("Required Missing fields " + missingFields.join());
        }
        contact.id = ++this.data.idCounter;
        this.data.contacts.push(contact);
        return { ...contact };
    }
    // getAllContact
    getAllContact() {
        return [... this.data.contacts];
    }
    // updateContact
    // steps 
    // 1. check for object 
    // 2. check if the objects id exists 
    // 3. delete a record which matches 
    // 4. post a new contact 

    // deleteContact
    // take the id, splice and send the message 
}

module.exports = ContactService;