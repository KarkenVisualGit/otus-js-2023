function sumofDigits() {
    let sum = 0;
    for (let i = 50; i <= 100; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumofDigits());

module.exports = sumofDigits