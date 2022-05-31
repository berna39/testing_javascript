const forEach = require("../features/mocking");


test('Test callback with mocking', () => {
    const mockCallBack = jest.fn(x => 39 + x);
    forEach([3,5], mockCallBack);

    expect(mockCallBack.mock.calls.length).toBe(2);

    //testing call states
    expect(mockCallBack.mock.calls[0][0]).toBe(3); // first argument on first call
    expect(mockCallBack.mock.calls[1][0]).toBe(5); // first argument on first call

    //testing retun values
    expect(mockCallBack.mock.results[0].value).toBe(42);
    expect(mockCallBack.mock.results[1].value).toBe(44);
});