import { regExp } from '../src/regularExpression';

describe('Regular Expressions', () => {
    it('matches valid date format', () => {
      const regDate = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
      const strdate = '23.05.1996';
      expect(regDate.test(strdate)).toBe(true);
    });
  
    it('does not match invalid date format', () => {
      const regDate = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
      const strdate = '32.05.1996'; // Invalid day
      expect(regDate.test(strdate)).toBe(false);
    });
  
    it('matches valid email format', () => {
      const regmail = /[\da-z\.]+@[\da-z]+\.[a-z]+/;
      const mail = 'john@gmail.com';
      expect(regmail.test(mail)).toBe(true);
    });
  
    it('does not match invalid email format', () => {
      const regmail = /[\da-z\.]+@[\da-z]+\.[a-z]+/;
      const mail = 'john@gmailcom'; // Invalid email format
      expect(regmail.test(mail)).toBe(false);
    });
  
    it('matches valid phone number format', () => {
      const regPhone = /^\+\d{1,2}\s\d{3,4}\s\d{1,3}-\d{2}-\d{2}$/;
      const strphone = '+7 999 999-99-99';
      expect(regPhone.test(strphone)).toBe(true);
    });
  
    it('does not match invalid phone number format', () => {
      const regPhone = /^\+\d{1,2}\s\d{3,4}\s\d{1,3}-\d{2}-\d{2}$/;
      const strphone = '123'; // Invalid phone format
      expect(regPhone.test(strphone)).toBe(false);
    });
  });