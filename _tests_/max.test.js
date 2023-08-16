const max = require('../src/max');

test('max of 3 and 5 to be 5)', () => {
  expect(max(3, 5)).toBe(5);
});

test('max of 7 and 5 to be 7)', () => {
  expect(max(5, 7)).toBe(7);
});

test('max of 7 and 9 to be 9)', () => {
  expect(max(7, 9)).toBe(9);
});