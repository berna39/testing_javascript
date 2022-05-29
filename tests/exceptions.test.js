const gunnersCanPlayFor = require('../features/exceptions');

test('Test on gunners', () => {
    expect(() => gunnersCanPlayFor('Tottenham')).toThrow(Error);
    expect(() => gunnersCanPlayFor('Tottenham')).toThrow();

    // mode details
    expect(() => gunnersCanPlayFor('Tottenham')).toThrow('A gunner could never play for Spurs');
    expect(() => gunnersCanPlayFor('Tottenham')).toThrow(/gunner/);
});
