const sum = require("./sum");

test('sum of two values', () => {
    expect(sum(1, 3)).toBe(4);
});

test('sum of two values', () => {
    expect(sum(1, 3)).not.toBe(3);
});

test('sum of two values', () => {
    expect(sum(1, undefined)).toBe(NaN);
});