const multiply = require("../src/multiply");


test("multiply 3 * 2 to equal 6", () => {
  const logSpy = jest.spyOn(global.console, "log");
  multiply(3, 2);
 
  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(6);

  logSpy.mockRestore();
});

test("multiply 5 * 2 to equal 10", () => {
  const logSpy = jest.spyOn(global.console, "log");
  multiply(5, 2);
 
  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(10);

  logSpy.mockRestore();
});  

test("multiply 7 * 2 to equal 14", () => {
  const logSpy = jest.spyOn(global.console, "log");
  multiply(7, 2);
 
  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(14);

  logSpy.mockRestore();
}); 