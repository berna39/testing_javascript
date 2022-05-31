const myMock = jest.fn();
console.log(myMock()); // undifined

//mocking return value
myMock.mockReturnValueOnce(true).mockReturnValueOnce(13).mockReturnValueOnce('Toby');

console.log(myMock(), myMock(), myMock(), myMock()); // undifined

test('more about mocking',() => {

}); 