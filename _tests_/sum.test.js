const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 11 to equal 14', () => {
  expect(sum(3, 11)).toBe(14);
});

test('adds 17 + 11 to equal 28', () => {
  expect(sum(17, 11)).toBe(28);
});