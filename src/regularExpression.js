export function regExp() {
    const str = prompt ('enter string');

    const regDate = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
    // const strdate = '23.05.1996';
    const regmail = /[\da-z\.]+@[\da-z]+\.[a-z]+/;
    // const mail = 'john@gmail.com';
        const regPhone = /^\+\d{1,2}\s\d{3}\s\d{2,3}-\d{2}-\d{2}$/;
    // const strphone = '+7 999 999-99-99';
    if (regDate.test(str)) {
        console.log('valid date');
    } else if (regmail.test(str)) {
        console.log('valid email');
    } else if(regPhone.test(str)) {
        console.log('valid phone number');
    } else {
        throw new Error('Invalid data');
    }
}
