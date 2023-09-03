function averageSumOdd() {
    const num = prompt("Enter the number: ");
    let array = [];
    let sum = 0;
    for (let i = 1; i <= +num; i++) {
        if(i%2 !== 0) {
            sum+=i;
            array.push(i);
        }
    }
    console.log(sum/array.length);
    return sum/array.length;
}
// averageSumOdd();

module.exports = averageSumOdd;