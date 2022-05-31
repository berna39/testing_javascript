const forEach = require("../features/mocking");


test('Test callback with mocking', () => {
    const mockCallBack = jest.fn(x => 39 + x);
    forEach([3,5], mockCallBack);

    expect(mockCallBack.mock.calls.length).toBe(2);
});