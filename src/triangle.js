export function checkTriangleSides(a, b, c) {
  const maxSide = Math.max(a, b, c);
  let squareOfOtherSides = 0;
  if (a === maxSide) {
    squareOfOtherSides = Math.pow(b, 2) + Math.pow(c, 2);
  } else if (b === maxSide) {
    squareOfOtherSides = Math.pow(a, 2) + Math.pow(c, 2);
  } else if (c === maxSide) {
    squareOfOtherSides = Math.pow(a, 2) + Math.pow(b, 2);
  }
  if (Math.pow(maxSide, 2) !== squareOfOtherSides) {
    throw new Error("Triangle is not rectangular");
  } else {
    console.log("Triangle is rectangle");
  }
}
