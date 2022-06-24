const { addition, substraction } = require("../src/maths-thorw-error");

test("testing to throw an error when passing 1 of the arg as String ", async () => {
    expect(() => addition('10', 10)).toThrowError(
        Error("Input should be numbers")
    );


    expect(() => addition(10, '10')).toThrowError(
        Error("Input should be numbers")
    );
})

test("to add two numbers 10 and 20 and get 30 as output ", async () => {
    expect(addition(10, 20)).toEqual(30);
})