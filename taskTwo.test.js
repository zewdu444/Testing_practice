const taskTwo =require('./taskTwo')

test('String reverses',()=>{
  expect(taskTwo.reverseString('hello')).toEqual('olleh')
})