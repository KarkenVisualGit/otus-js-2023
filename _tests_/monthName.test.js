const monthName = require('../src/monthName');

describe("number from 1 ot 12 must be equal name of month", () => {
    it("returns сентябрь for 9", () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "9");
        expect(monthName()).toBe('сентябрь');
    });
    it("should throw when number is more then 12 and less then 1", () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "15");
        expect(() => {
            monthName();
          }).toThrowError(Error("Invalid number!"));
      });
});

