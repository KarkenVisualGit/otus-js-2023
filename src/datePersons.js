
export function calculateAgeDifference(date1, date2) {
    const diff1 = Date.now() - date1.getTime();
    const diff2 = Date.now() - date2.getTime();

    return diff1 - diff2;
}

export function getOlder(person1, person2) {
    const ageDifference = calculateAgeDifference(person1.date, person2.date);

    return ageDifference > 0 ? `${person2.name} is younger` : `${person1.name} is younger`;
}
