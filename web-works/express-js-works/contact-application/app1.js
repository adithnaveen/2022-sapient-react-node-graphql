// working with async 

const ContactService = require('./services/ContactServiceAsync');

const cs = new ContactService();

console.log("*** Start ***");
// cs.getContactById(1, (err, data) => {
//     if (err) {
//         console.log("Error ", err);
//     } else {
//         console.log(data);
//     }

// })



let newContact = { 
    name: "Kumkum Ram",
    email: "kumkum@ps.com", 
    phone: 7788996655, 
    city: "Mysuru" 
};

cs.addContact(newContact, (err, data) => {
    if (err) {
        console.log("Error : ", err);
    } else {
        console.log(data);
    }
})

console.log("*** End ***");