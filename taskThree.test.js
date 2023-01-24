const Calculator =require('./taskThree')
const calculator =new Calculator()
// addition unit test
describe('addition',()=>{
  test('add function exists',()=>{
   expect(calculator.add()).toBeDefined()
  }
  )
  test('should be equal to 4', () => {
    expect(calculator.add(2,2)).toBe(4)
  });
  test('should be return null ', () => {
    expect(calculator.add(1,)).toBeNull()
  });
})
// subtraction unit test
describe('subtraction',()=>{
  test('Subtraction function exists',()=>{
    expect(calculator.subtract()).toBeDefined()
   }
   )
   test('should be equal to 0', () => {
     expect(calculator.subtract(2,2)).toBe(0)
   });
   test('should be return null ', () => {
     expect(calculator.subtract(1,)).toBeNull()
   });
   
})
// multiplication unit test
describe('multiplication',()=>{
  test('multiplication function exists',()=>{
    expect(calculator.multiply()).toBeDefined()
   }
   )
   test('should be equal to 8', () => {
     expect(calculator.multiply(2,4)).toBe(8)
   });
   test('should be return null ', () => {
     expect(calculator.multiply(1,)).toBeNull()
   });
   
})

// division  unit test
describe('division',()=>{
  test('division function exists',()=>{
    expect(calculator.divide()).toBeDefined()
   }
   )
   test('should be equal to 8', () => {
     expect(calculator.divide(8,2)).toBe(4)
   });

   test('should be return null ', () => {
     expect(calculator.divide(1,)).toBeNull()
   });
   test('division by zero error', () => {
    expect(()=>{
      calculator.divide(2,0)})
      .toThrow( new Error('division by zero error'))
    })
})