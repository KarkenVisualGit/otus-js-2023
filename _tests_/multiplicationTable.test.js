const multiplicationTable = require("../src/multiplicationTable");

describe("Test multiplicationTable", () => {
    test("Console log should have been called", () => {
      const logSpy = jest.spyOn(global.console, "log");
  
      multiplicationTable();
  
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(9);
      expect(logSpy).toHaveBeenCalledWith("7 x 1 = 7");
      expect(logSpy).toHaveBeenCalledWith("7 x 2 = 14");
      expect(logSpy).toHaveBeenCalledWith("7 x 3 = 21");
      expect(logSpy).toHaveBeenCalledWith("7 x 4 = 28");
      expect(logSpy).toHaveBeenCalledWith("7 x 5 = 35");
      expect(logSpy).toHaveBeenCalledWith("7 x 6 = 42");
      expect(logSpy).toHaveBeenCalledWith("7 x 7 = 49");
      expect(logSpy).toHaveBeenCalledWith("7 x 8 = 56");
      expect(logSpy.mock.calls).toContainEqual(["7 x 9 = 63"]);
  
      logSpy.mockRestore();
    });
  });