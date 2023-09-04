const sum = require("../src/sum");

test("adds 1 + 2 to equal 3", () => {
  const logSpy = jest.spyOn(global.console, "log");
  sum(1, 2);

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(3);

  logSpy.mockRestore();
});

test("adds 3 + 11 to equal 14", () => {
  const logSpy = jest.spyOn(global.console, "log");
  sum(3, 11);

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(14);

  logSpy.mockRestore();
});

test("adds 17 + 11 to equal 28", () => {
  const logSpy = jest.spyOn(global.console, "log");
  sum(17, 11);

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(28);

  logSpy.mockRestore();
});
