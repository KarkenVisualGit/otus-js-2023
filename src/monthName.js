function monthName() {
    const num = prompt('Enter the number from 1 ot 12: ');
    let arrMonth = ['январь', 'ферваль', 'март', 'апрель', 'май', 'июнь', 'июль',
        'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

    if (num > 12 || num < 1) {
        throw Error("Invalid number!");
    } else 
    console.log(arrMonth[num - 1]);
}

module.exports = monthName