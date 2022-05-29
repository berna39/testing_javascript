const anAsyncFunction = require('../features/async');

test('Testing asynchronous stuffs', () => {
    return anAsyncFunction().then(data => {
        expect(data).toBe('Meal cooked');
    });
});

test('Testing asynchronous stuffs with await', async() => {
    const data = await anAsyncFunction();
    expect(data).toBe('Meal cooked');
});

test('Testing asynchronous\'s resolve cb', async() => {
    await expect(anAsyncFunction()).resolves.toBe('Meal cooked');
});