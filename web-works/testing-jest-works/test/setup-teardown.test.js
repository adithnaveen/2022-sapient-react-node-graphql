const { largeNumber, largeNumberBoolean } = require("../src/business-logic")

let num1 = 0;
let num2 = 0;
beforeAll(() => {
    console.log("This is in before all");
})
afterAll(() => {
    console.log("This is in after all");
})

beforeEach(() => {
    num1 = 20;
    num2 = 10;
    console.log("in beforeEach()")
})
afterEach(() => {
    console.log("this is after Each ")
})


describe('to find largest of numbers for different values', () => {

    test("to check 20 is greater than 10 which shall return true", () => {
        expect(largeNumber(num1, num2)).toBeTruthy();
    })

    test("to check 10 is less than 20 should return false", () => {
        expect(largeNumber(num2, num1)).toEqual(num1);
    })

    describe('to test largest with boolean conditions only', () => {


        beforeEach(() => {

            console.log("in beforeEach()- Nested")
        })
        afterEach(() => {
            console.log("this is after Each - Nested")
        })


        test("test check the large number with boolen method for falsy ", () => {
            expect(largeNumberBoolean(num2, num1)).toBeFalsy();
        });

        test("test check the large number with boolen method for true  ", () => {
            expect(largeNumberBoolean(num1, num2)).toBeTruthy();
        });
    })
})