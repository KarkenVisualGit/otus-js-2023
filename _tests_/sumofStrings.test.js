const sumofStrings = require('../src/sumofStrings');


test('adds first + second to equal (first.length + second.length))', () => {
    expect(sumofStrings('John', 'Smith')).toBe(9);
  });
