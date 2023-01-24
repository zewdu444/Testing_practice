 const taskOne=require('./taskOne')

test('string length should be equal to 5',()=>{
  expect(taskOne.stringLength('hello')).toBe(5)
})
test('Throw exception out of bound ', () => {
expect(()=>{
  taskOne.stringLength('hello ethiopia')})
  .toThrow( new Error('string length should be between 1 and 10'))
});