const ContactService = require('./services/ContactServicePromise');

let cs = new ContactService();


// cs.getAllContacts()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("Err : ", err);
//     })

cs.getContactById(5)
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
