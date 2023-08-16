const nums = [];
let sum = 0;
for (let i = 0; i < 10; i++)
{
    // let num = prompt('Enter a value of array');
    // let n = Number(num);
    nums.push(Math.ceil(Math.random(0.5)*7));
}
// console.log(nums.sort((a,b) => a - b));
const newnums = nums.forEach(element => 
    {
        sum+=element;
    }
)
console.log(sum);
const array = nums.map(x => x * 2);
// console.log(array);
// console.log(array.sort((a,b) => a - b));
orderedArray = nums.sort((a,b) => a - b);
let min = orderedArray[0];
let max = orderedArray[9];
console.log(max);
console.log(min);