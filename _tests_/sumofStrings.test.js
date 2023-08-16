const sumofStrings = require('../src/sumofStrings');


test('adds John + Smith to equal 9)', () => {
  expect(sumofStrings('John', 'Smith')).toBe(9);
});

test('adds Joshua + Grunt to equal 11)', () => {
  expect(sumofStrings('Joshua', 'Grunt')).toBe(11);
});

test('adds Matthew + McConaughey to equal 18)', () => {
  expect(sumofStrings('Matthew', 'McConaughey')).toBe(18);
});