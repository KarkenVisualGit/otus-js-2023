const sumof3digitNumber = require('../src/sumof3digits');

test('sum of digits of 567 to be equal 18)', () => {
    expect(sumof3digitNumber(567)).toBe(18);
  });