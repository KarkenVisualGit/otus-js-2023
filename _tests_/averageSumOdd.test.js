const averageSumOdd = require('../src/averageSumOdd');

describe('Test averageSumOdd', () => {
    it("returns 12 for 23", () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "23");
        expect(averageSumOdd()).toBe(12);
    });
    test('Console log should have been called with average of odd\'s sum', () => {
      const logSpy = jest.spyOn(global.console, 'log');
  
      averageSumOdd();
  
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(1);
      expect(logSpy).toHaveBeenCalledWith(12);
        
      logSpy.mockRestore();
    });
  });