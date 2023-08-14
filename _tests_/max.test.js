const max = require('../src/max');

test('max of 3 and 5 to be 5)', () => {
    expect(max( 3, 5)).toBe(5);
  });