export function getOlder() {
    let persondate1 = prompt('DD.MM.YYYY');
    const [dd, mm, yr] = persondate1.split('.');
    const personDate1 = new Date(`${yr}-${mm}-${dd}`);
    let persondate2 = prompt('DD.MM.YYYY');
    const [dd1, mm1, yr1] = persondate2.split('.');
    const personDate2 = new Date(`${yr1}-${mm1}-${dd1}`);

    const person1 = {
        date: personDate1,
        name: 'First person'
    };
    const person2 = {
        date: personDate2,
        name: 'Second person'
    }
    // let diffDate = (personDate1 / 1000 / 60 / 60 / 24) - (personDate2 / 1000 / 60 / 60 / 24);
    // diffDate = diffDate / 1000 / 60 / 60 / 24;
    function older() {
        return (personDate1 > personDate2) ? (person1.name + " is younger"):
        (person2.name + " is younger");
    }
    console.log(older());
}
