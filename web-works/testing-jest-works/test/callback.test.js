const callback = require("../src/callback");



describe('testing the end point', () => {

    test('testing callback with error', () => {
        callback("http://localhost:3000/api/tes", (err) => {
            expect(err).toEqual(Error("URL is wrong"));
        })
    })

    test("to get the valid data of test", () => {
        callback("http://localhost:3000/api/test", (err, data) => {
            expect(data).toEqual("Test");
        })
    })
})