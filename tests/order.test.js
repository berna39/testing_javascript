const { rand } = require("../features/advanced");

describe('First group of tests', ()=>{

    beforeAll(() => {
        console.log('Before all tests of group one')
    });

    afterAll(() => {
        console.log('After all tests of group one');
    });

    test('Random number less than 10', () => {
        expect(rand()).toBeLessThan(10);
    });

    // more tests
});

describe('Second group of tests', ()=>{

    beforeAll(() => {
        console.log('Before all tests of group two')
    });

    afterAll(() => {
        console.log('After all tests of group two');
    });

    test('Random number less than 10', () => {
        expect(rand()).toBeLessThan(10);
    });

    // more tests
});