const diff = require("../src/diff");

describe("Test diff", () => {
    it("Must return difference between 7 and 5", () => {
        const a = 7;
        const b = 5;
        expect(diff(a, b)).toEqual(2);
    });

    it("Must return difference between 9 and 4", () => {
        const a = 4;
        const b = 9;
        expect(diff(a, b)).toEqual(5);
    });

    it("Must return difference between 0 and -5", () => {
        const a = 0;
        const b = -5;
        expect(diff(a, b)).toEqual(5);
    });
});