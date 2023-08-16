const nums = [];
let sum = 0;
for (let i = 0; i < 10; i++)
{
    // let num = prompt('Enter a value of array');
    // let n = Number(num);
    nums.push(Math.random());
}
console.log(nums);
const newnums = nums.forEach(element => 
    {
        sum+=element;
    }
)
console.log(sum);