const foo = require("../features/advanced");

beforeEach(() => {
    console.log('Get everything prepared for test')
});

afterEach(() => {
    console.log('Delete all dummy data used for test');
});

test('Make sure that foo returns something', () => {
    expect(foo()).toBe('I believe in God');
});

