// to show working of event emitter 
// is a class 
const EventEmitter = require('events');

const evntEmitter = new EventEmitter();

evntEmitter.on('myjob', () =>{
    console.log("Myjob is called... ");
})

evntEmitter.on('add', (num1, num2) => {
    console.log(`Result of two number add : ${num1 + num2}`)
})

evntEmitter.emit('myjob');
evntEmitter.emit('add', 23, 280);

class Person extends EventEmitter {
    constructor(name, salary) {
        super();
        this._name = name; 
        this._salary = salary; 
    }

    get name() {
        return this._name; 
    }

    get salary() {
        return this._salary;
    }

    set name(name) {
        this._name = name;
    }

    set salary(salary) {
        this._salary = salary; 
    }
}

let per1 = new Person("Brahmanand", 1234); 
let per2 = new Person("Ayush", 2233); 

per1.on('person1', ()=> {
    console.log(`Name :${per1.name}, Salary ${per1.salary}`);
})

per2.on('person2', ()=> {
    console.log(`Name :${per2.name}, Salary ${per2.salary}`);
})


per1.emit("person1"); 
console.log("----------------");
per2.emit("person2");


console.log("Number of events registered: ", evntEmitter.listenerCount('person2')); 

per2.removeListener('person2', () => {
    console.log("person2 event listener is off");
})
 
// as of now the event is still getting triggered
console.log("----------====------");
per2.emit("person2");
