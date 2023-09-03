// const circle = 200;
// const square = 300;

function isCirleInSquare(circle, square) {
  if (2 * Math.sqrt(circle / Math.PI) <= Math.sqrt(square)) {
    return true;
  } else return false;
}

module.exports = isCirleInSquare;
