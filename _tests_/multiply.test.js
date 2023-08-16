const multiply = require('../src/multiply');


test('multiply 3 * 2 to equal 6', () => {
  expect(multiply(3, 2)).toBe(6);
});

test('multiply 5 * 2 to equal 10', () => {
  expect(multiply(5, 2)).toBe(10);
});  

test('multiply 7 * 2 to equal 14', () => {
  expect(multiply(7, 2)).toBe(14);
}); 