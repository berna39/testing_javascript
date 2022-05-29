const gunnersCanPlayFor = require('../features/exceptions');

test('Test on gunners', () => {
    expect(() => gunnersCanPlayFor('Tottenham')).toThrow(Error);
});

test('Test on gunners', () => {
    expect(() => gunnersCanPlayFor('Tottenham')).toThrow();
});