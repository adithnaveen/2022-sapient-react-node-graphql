// to show working basics with NodeJS 

const mbl = require("./services/first"); 


// console.log(mbl);
const result = mbl.sum(10,20);
console.log(`Result ${result}`);
console.log(`Constant Value : ${mbl.PI}`)
let someLogic = new mbl.MyBusinessLogic('Laptop');
