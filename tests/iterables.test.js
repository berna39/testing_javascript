const someIterable = require('../features/iterables');

test('test on iterable', () => {
    expect(someIterable).toContain('Hitachi');
});