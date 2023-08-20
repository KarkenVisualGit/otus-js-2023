const diff = require('../src/diff');

describe('Test diff', () => {
    it("Must return difference between max and min values of two numbers", () => {
        const a = 7;
        const b = 5;
        expect(diff(a, b)).toEqual(2);
    });

    it("Must return difference between max and min values of two numbers", () => {
        const a = 4;
        const b = 9;
        expect(diff(a, b)).toEqual(5);
    });

    it("Must return difference between max and min values of two numbers", () => {
        const a = 0;
        const b = -5;
        expect(diff(a, b)).toEqual(5);
    });
});