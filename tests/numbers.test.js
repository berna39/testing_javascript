const someNumber = require('../features/numbers');

test('test on numbers', () => {
    expect(someNumber).toBeGreaterThan(5);
});

test('test on numbers >=', () => {
    expect(someNumber).toBeGreaterThanOrEqual(39);
});

test('test on numbers less than', () => {
    expect(someNumber).toBeLessThan(100);
});

test('test on numbers <= than', () => {
    expect(someNumber).toBeLessThanOrEqual(50);
});

test('test on floating number', () => {
    expect(someNumber + 0.3).toBeCloseTo(39.3);
});
