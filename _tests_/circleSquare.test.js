const isCirleInSquare = require("../src/circleSquare");

test("Must return true for circle of area 200 can inscribed to square of area 300", () => {
  let circle = 200;
  let square = 300;
  expect(isCirleInSquare(circle, square)).toBe(true);
});

test("Must return true for circle of area 250 can inscribed to square of area 300)", () => {
  let circle = 250;
  let square = 300;
  expect(isCirleInSquare(circle, square)).toBe(false);
});

test("Must return true for circle of area 300 can inscribed to square of area 400)", () => {
  let circle = 300;
  let square = 400;
  expect(isCirleInSquare(circle, square)).toBe(true);
});
