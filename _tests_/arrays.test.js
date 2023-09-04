import { orderArray, getSum, doubleArray } from "../src/arrays";

describe("Test arrayElements for sum, min and max elements", () => {
  it("Must console log sum of elements, min and max elements", () => {
    const nums = [5, 1, 3, 3, 7, 2, 5, 2, 2, 7];
    const logSpy = jest.spyOn(global.console, "log");
    orderArray(nums);
    getSum(nums);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(3);

    expect(logSpy).toHaveBeenCalledWith(7);
    expect(logSpy).toHaveBeenCalledWith(1);
    expect(logSpy.mock.calls).toContainEqual([37]);

    logSpy.mockRestore();
  });
});
describe("Test arrayElements for returning doubled array", () => {
  it("Must return doubled array", () => {
    const nums = [5, 1, 3, 3, 7, 2, 5, 2, 2, 7];
    expect(doubleArray(nums)).toEqual([10, 2, 6, 6, 14, 4, 10, 4, 4, 14]);
  });
});
