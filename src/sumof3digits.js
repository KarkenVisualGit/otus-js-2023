function sumof3digitNumber(num) {
    const digit3 = num % 10;
    const digit1 = (num - num % 100) / 100;
    const digit2 = (num - digit1 * 100 - digit3) / 10;
    return digit1 + digit2 + digit3;
}

const num = prompt('Enter the number: ');

console.log(sumof3digitNumber(num));

module.exports = sumof3digitNumber