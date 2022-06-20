// all service business logic's shall go here 

const sum =(num1, num2)=> num1 + num2;

const PI =3.14; 


class MyBusinessLogic {
    constructor(name) {
        this.name = name; 
        console.log("Object created...");
    }
}

// version 1
// module.exports.mysimplesum = sum; 
// module.exports.PI = PI;
// module.exports.MyBusinessLogic = MyBusinessLogic; 

// version 2 
// module.exports = {sum:sum, PI:PI,MyBusinessLogic:MyBusinessLogic};

// version 3 
module.exports = {sum,PI, MyBusinessLogic};


