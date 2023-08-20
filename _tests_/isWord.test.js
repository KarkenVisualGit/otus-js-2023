const isWord = require('../src/isWord');

describe('Test isWord', () => {
    it("Must return true if it is only one word, another false", () => {
        expect(isWord('MarryPoppins')).toEqual(true);
    });

    it("Must return true if it is only one word, another false", () => {
        expect(isWord("Abay's Way")).toEqual(false);
    });

    it("Must return true if it is only one word, another false", () => {
        expect(isWord('Chick' + '\n' + 'flick')).toEqual(false);
    });
});