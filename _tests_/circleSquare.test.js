const isCirleInSquare = require('../src/circleSquare');

test('Can a circle be inscribed in a square)', () => {
    const circle = 200;
    const square = 300;
    expect(isCirleInSquare(circle, square)).toBe(true);
});