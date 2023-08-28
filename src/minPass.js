
export function minPassed() {
    let day = new Date(Date.now());
    const hours = day.getHours();
    const mins = day.getMinutes();

    let minPass = hours * 60 + mins;

    console.log(minPass);
}
//  minPassed();