const sumof3digitNumber = require("../src/sumof3digits");

describe("sum of digits in 3-digit number", () => {
  it("returns 18 for 567", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "567");
    const logSpy = jest.spyOn(global.console, "log");
    sumof3digitNumber();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(18);

    logSpy.mockRestore();
  });
  it("returns 6 for 123", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "123");
    const logSpy = jest.spyOn(global.console, "log");
    sumof3digitNumber();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(6);

    logSpy.mockRestore();
  });
  it("returns 14 for 257", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "257");
    const logSpy = jest.spyOn(global.console, "log");
    sumof3digitNumber();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(14);

    logSpy.mockRestore();
  });
});
