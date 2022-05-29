const verify = require('../features/boolean');

test('Verify age', () => {
    expect(verify(19)).toBeTruthy();
});

test('Verify age', () => {
    expect(verify(13)).toBeFalsy();
});