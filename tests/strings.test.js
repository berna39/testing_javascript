const anyString = require('../features/strings');

test('test on string', () => {
    expect(anyString).toMatch(/nato/);
});

test('test on string -> not match', () => {
    expect(anyString).not.toMatch(/toby/);
});