const sumofStrings = require('../src/sumofStrings');


test('adds John + Smith to equal 9)', () => {
    expect(sumofStrings('John', 'Smith')).toBe(9);
  });
