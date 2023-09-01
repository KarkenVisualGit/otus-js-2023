export function regExp() {
    const regDate = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
    const strdate = '23.05.1996';
    console.log(regDate.test(strdate));

    const regmail = /[\da-z\.]+@[\da-z]+\.[a-z]+/;
    const mail = 'john@gmail.com';
    console.log(regmail.test(mail));

    const regPhone = /^\+\d{1,2}\s\d{3,4}\s\d{1,3}-\d{2}-\d{2}$/;
    const strphone = '+7 999 999-99-99';
    console.log(regPhone.test(strphone));
}
