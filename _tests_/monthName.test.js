const monthName = require("../src/monthName");

describe("number from 1 ot 12 must be equal name of month", () => {
  it("returns сентябрь for 9", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "9");
    const logSpy = jest.spyOn(global.console, "log");
    monthName();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith("сентябрь");

    logSpy.mockRestore();
  });
  it("returns январь for 1", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "1");
    const logSpy = jest.spyOn(global.console, "log");
    monthName();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith("январь");

    logSpy.mockRestore();
  });
  it("returns январь for 3", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "3");
    const logSpy = jest.spyOn(global.console, "log");
    monthName();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith("март");

    logSpy.mockRestore();
  });
  it("should throw when number is more then 12 and less then 1", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "15");
    expect(() => {
      monthName();
    }).toThrowError(Error("Invalid number!"));
  });
});
