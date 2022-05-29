const data = require("../features/objects");

test('test on object', () => {
    expect(data).toEqual({name: 'Toby', clan: 'Uchiha'});
});
