// will be invoker 

const ContactService = require("./services/ContactServce");

const cs = new ContactService();

let contact = cs.getContactById(1);
console.log("----------------------------");

console.log(contact);

let newContact = { name: "Kumkum Ram", email: "kumkum@ps.com", phone: 7788996655, city: "Mysuru" };

console.log("----------------------------");
let returnContact = cs.addContact(newContact);
console.log("inserted contact : ", returnContact);
console.log("----------------------------");

console.log("All Contacts Are ");
cs.getAllContact().forEach((contact) => {
    console.log(contact);
})


uContact = { id: 1, name: "Kumkum Ram", email: "kumkum@ps.com", phone: 7788996655, city: "New York" };
cs.updateContact(uContact);




console.log("All Contacts after update... ");
cs.getAllContact().forEach((contact) => {
    console.log(contact);
})
console.log("----------------------------");
cs.deleteContact(1);


console.log("All Contacts after delete... 1 ");
cs.getAllContact().forEach((contact) => {
    console.log(contact);
})