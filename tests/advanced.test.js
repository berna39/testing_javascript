const { foo, rand } = require("../features/advanced");

beforeEach(() => {
    console.log('Get everything prepared for test'); // before every tests
});

afterEach(() => {
    console.log('Delete all dummy data used for test'); // after every tests
});

beforeAll(() => {
    console.log('Before all tests'); // before all tests
});

afterAll(() => {
    console.log('After all tests'); //after all tests
});

test('Make sure that foo returns something', () => {
    expect(foo()).toBe('I believe in God');
});

test('Make sure that rand return a correct value', () => {
    expect(rand()).toBeLessThan(10);
});

