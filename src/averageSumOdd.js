function averageSumOdd() {
  const num = prompt("Enter the number: ");
  let array = [];
  let sum = 0;
  let result = 0;
  for (let i = 1; i <= +num; i = i + 2) {
    if (i % 2 !== 0) {
      sum += i;
      array.push(i);
    }
  }
  result = sum / array.length;
  console.log(result);
  return result;
}
// averageSumOdd();

module.exports = averageSumOdd;
