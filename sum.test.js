const sum = require("./sum");

test('sum of two values', () => {
    expect(sum(1, 3)).toBe(4);
});