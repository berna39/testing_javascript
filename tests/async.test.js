const anAsyncFunction = require('../features/async');

test('Testing asynchronous stuffs', () => {
    return anAsyncFunction().then(data => {
        expect(data).toBe('Meal cooked');
    });
});