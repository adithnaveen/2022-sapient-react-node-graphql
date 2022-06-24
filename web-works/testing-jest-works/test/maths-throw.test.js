const { addition, substraction } = require("../src/maths-thorw-error");


describe('testing for addition valid and invalid cases', () => {

    test("testing to throw an error when passing 1 of the arg as String ", async () => {
        expect(() => addition('10', 10)).toThrowError(
            Error("Input should be numbers")
        );


        expect(() => addition(10, '10')).toThrowError(
            Error("Input should be numbers")
        );
    })

    test.skip("to add two numbers 10 and 20 and get 30 as output ", async () => {
        expect(addition(10, 20)).toEqual(30);
    })
})


// substraction 
xdescribe('testing for substraction for valid and invalid cases', () => {


    test("testing to throw an error while substracting the numbers", () => {


        expect(() => substraction(10, '10')).toThrowError(
            Error("Input should be numbers")
        );
        expect(() => substraction('10', 10)).toThrowError(
            Error("Input should be numbers")
        );
    })

    test("substracting number 30 from 100 should give 70", () => {
        expect(substraction(100, 30)).toEqual(70);
    })

})
