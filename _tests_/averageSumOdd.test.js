const averageSumOdd = require("../src/averageSumOdd");

describe("Test averageSumOdd", () => {
  it("returns 12 for 23", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "23");
    const logSpy = jest.spyOn(global.console, "log");
    averageSumOdd();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(12);

    logSpy.mockRestore();
    expect(averageSumOdd()).toBe(12);
  });
  it("returns 27 for 54", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "54");
    const logSpy = jest.spyOn(global.console, "log");
    averageSumOdd();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(27);

    logSpy.mockRestore();
    expect(averageSumOdd()).toBe(27);
  });
  it("returns 30 for 59", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "59");
    const logSpy = jest.spyOn(global.console, "log");
    averageSumOdd();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(30);

    logSpy.mockRestore();
    expect(averageSumOdd()).toBe(30);
  });
  
});