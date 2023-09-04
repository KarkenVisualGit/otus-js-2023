const averageSumOdd = require("../src/averageSumOdd");

describe("Test averageSumOdd", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns 12 for 23", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "23");
    const logSpy = jest.spyOn(global.console, "log");
    const result = averageSumOdd();
    expect(result).toBe(12);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(12);
  });
  it("returns 27 for 54", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "54");
    const logSpy = jest.spyOn(global.console, "log");
    const result = averageSumOdd();
    expect(result).toBe(27);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(27);
  });
  it("returns 30 for 59", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "59");
    const logSpy = jest.spyOn(global.console, "log");
    const result = averageSumOdd();
    expect(result).toBe(30);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(30);
  });

  afterAll(() => {
    window.prompt.mockRestore();
    console.log.mockRestore();
  });
});
