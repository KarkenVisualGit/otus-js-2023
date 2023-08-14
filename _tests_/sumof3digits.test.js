const sumof3digitNumber = require('../src/sumof3digits');

// test('sum of digits of 567 to be equal 18)', () => {
//     expect(sumof3digitNumber(567)).toBe(18);
//   });
describe("sum of digits in 3-digit number", () => {
  it("returns 18 for 567", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "567");
    expect(sumof3digitNumber()).toBe(18);
  });
});
