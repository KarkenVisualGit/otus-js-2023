const pow = require('../src/pow');

describe('Test pow', () => {
    it("Must return result of exponentiation", () => {
        expect(pow(2, 10)).toEqual(1024);
    });

    it("Must return result of exponentiation", () => {
        expect(pow(3, -5)).toEqual(0.004115226337448559);
    });

    it("Must return result of exponentiation", () => {
        expect(pow(5, 0)).toEqual(1);
    });
});