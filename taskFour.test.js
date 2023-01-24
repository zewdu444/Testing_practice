const taskFour =require('./taskFour')
// following TDD approch
test('Should be the same', () => {
  expect(taskFour.capitalize('hello')).toEqual('HELLO')
});
