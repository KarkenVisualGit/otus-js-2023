// const nums = [5, 1, 3, 3, 7, 2, 5, 2, 2, 7];
let sum = 0;
let orderedArray = [];

export function orderArray(nums) {
  orderedArray = nums.sort((a, b) => a - b);
  let min = orderedArray[0];
  let max = orderedArray[9];
  console.log(max);
  console.log(min);
}


export function getSum(nums) {
  nums.forEach((element) => {
    sum += element;
  });
  console.log(sum);
  return sum;
}


export function doubleArray(nums) {
  const array = nums.map((x) => x * 2);
  return array;
}

