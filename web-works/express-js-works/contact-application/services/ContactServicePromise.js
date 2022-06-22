const fs = require("fs");
const path = require("path");

const fileName = path.join(__dirname, 'contacts.json');


class ContactService {
    constructor() {
        this.data = [];

        if (fs.existsSync(fileName)) {
            this.data = JSON.parse(fs.readFileSync(fileName, 'utf-8'));
        }
    }


    getAllContacts() {
        return new Promise((resolve, reject) => {
            resolve([...this.data.contacts]);
        })
    }

    getContactById(id) {
        return new Promise((resolve, reject) => {
            if (!id || typeof id !== 'number') {
                reject('id was not supplied in the request/ was not number');
                // we dont have to call return 
                // reject will implicitly take care 
            }

            let contact = this.data.contacts.find(c => c.id === id);
            if (!contact) {
                reject("Sorry contact not found...")
            }
            resolve(contact);

        })
    }

    // add 

    // update

    // delete 

}

module.exports = ContactService; 