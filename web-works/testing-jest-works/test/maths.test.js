// the file name should end with .test.js 
const { addition, substraction, multiplication, division } = require("../src/maths");

test("Adding two number of 10 and 20 should give you 30", () => {
    expect(addition(10, 20)).toEqual(30);
})


test("testing add function with multiple values", () => {
    expect(addition(10, 20)).toEqual(30);
    expect(addition(100, 200)).toEqual(300);
})

test("substracting two numbers from 100 and 50 should give you 50", () => {
    expect(substraction(100, 50)).toEqual(50);
})


test("multiple 30 and 10 which shall result in 300", () => {
    expect(multiplication(30, 10)).toEqual(300);
})