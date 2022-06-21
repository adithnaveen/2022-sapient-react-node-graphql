const fs = require("fs");
const path = require("path");

const fileName = path.join(__dirname, 'contacts.json');

class ContactService {


    constructor() {
        try {
            this.data = JSON.parse(fs.readFileSync(fileName, 'utf-8'));
        } catch (err) {
            this.data = {
                idCounter: 2,
                contacts: [
                    { id: 1, name: "Rohit", email: "rohit@ps.com", phone: 7894561230, city: "Delhi" },
                    { id: 2, name: "Ankit", email: "ankit@ps.com", phone: 4563214569, city: "Mumbai" },
                ]
            };
        }
    }


    getContactById(id, callback) {
        if (!callback || typeof callback !== 'function') {
            throw new Error("Callback function missing");
        }

        setTimeout(() => {
            if (!id || typeof id !== 'number') {
                let err = {};
                err.code = 10001;
                err.msg = "please pass id as number";
                callback(err);
                return;
            }

            let contact = this.data.contacts.find(c => c.id === id);
            if (!contact) contact = null;
            callback(null, contact);

        }, 0);
    }

    addContact(contact, callback) {
        if (!callback || typeof callback !== 'function') {
            throw new Error("Callback function missing");
        }

        setTimeout(() => {
            if (!contact || typeof contact !== 'object') {
                let err = {};
                err.code = 1002;
                err.msg = "Please pass object"
                callback(err);
                return;
            }

            const requireFields = ['name', 'email', 'phone', 'city'];
            const missingFields = [];

            requireFields.forEach((field) => {
                if (!(field in contact)) {
                    missingFields.push(field);
                }
            });

            if (missingFields.length !== 0) {
                let err = {};
                err.code = 1003;
                err.msg = "Please supply missing fields " + missingFields.join();
                callback(err);
                return;
            }

            contact.id = ++this.data.idCounter;
            this.data.contacts.push(contact);

            fs.writeFile(fileName, JSON.stringify(this.data), 'utf-8', (err, data) => {
                if (err) {
                    callback(err);
                    return;
                }
                callback(null, contact);
            });

        }, 0);

    }




}

module.exports = ContactService;