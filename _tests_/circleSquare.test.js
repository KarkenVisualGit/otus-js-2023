const isCirleInSquare = require('../src/circleSquare');

test('Can a circle be inscribed in a square)', () => {
    let circle = 200;
    let square = 300;
    expect(isCirleInSquare(circle, square)).toBe(true);
});

test('Can a circle be inscribed in a square)', () => {
    let circle = 250;
    let square = 300;
    expect(isCirleInSquare(circle, square)).toBe(false);
});

test('Can a circle be inscribed in a square)', () => {
    let circle = 300;
    let square = 400;
    expect(isCirleInSquare(circle, square)).toBe(true);
});