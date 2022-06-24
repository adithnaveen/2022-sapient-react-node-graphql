const addition = (num1, num2) => {

    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }

    throw Error("Input should be numbers");

}


const substraction = (num1, num2) => {

    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 - num2;
    }

    throw Error("Input should be numbers");
}

// like wise please try for multiplication and division 

module.exports = { addition, substraction };
