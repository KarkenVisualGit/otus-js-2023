const max = require("../src/max");

test("max of 3 and 5 to be 5)", () => {
  const logSpy = jest.spyOn(global.console, "log");
  max(3, 5);

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(5);

  logSpy.mockRestore();
});

test("max of 7 and 5 to be 7)", () => {
  const logSpy = jest.spyOn(global.console, "log");
  max(7, 5);

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(7);

  logSpy.mockRestore();
});

test("max of 7 and 9 to be 9)", () => {
  const logSpy = jest.spyOn(global.console, "log");
  max(7, 9);

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(9);

  logSpy.mockRestore();
});
