const myMockFunction = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call')
    .mockImplementationOnce((val) => val * val);


test('mock invoke first call', () => {
    expect(myMockFunction()).toBe('first call');
})

test('mock invoke second call', () => {
    expect(myMockFunction()).toBe('second call');
})

test('multiply the mock ', () => {
    expect(myMockFunction(3)).toBe(9);
})

test('mocking with nothing ', () => {
    console.log(myMockFunction());
})