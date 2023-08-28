export function weekDay() {
    const input = prompt('DD.MM.YYYY');
    const [days, month, year] = input.split('.');

    const inputDate = new Date(`${year}-${month}-${days}`);

    function getWeekDay(date) {
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

        return days[date.getDay()];
    }

    console.log(getWeekDay(inputDate));
}


