
const nums = [5, 1, 3, 3, 7, 2, 5, 2, 2, 7];
let sum = 0;
let orderedArray = [];
// for (let i = 0; i < 10; i++) {
//     nums.push(Math.ceil(Math.random(0.5) * 7));
// }
function arrayElements(nums) {
    const newnums = nums.forEach(element => {
        sum += element;
    }
    )
    console.log(sum);
    const array = nums.map(x => x * 2);
    orderedArray = nums.sort((a, b) => a - b);
    let min = orderedArray[0];
    let max = orderedArray[9];
    console.log(max);
    console.log(min);
    return array;
}

module.exports = arrayElements
