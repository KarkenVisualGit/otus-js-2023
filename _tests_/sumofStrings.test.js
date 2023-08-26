const sumofStrings = require('../src/sumofStrings');


test('adds John + Smith to equal 9)', () => {
  const logSpy = jest.spyOn(global.console, 'log');
  sumofStrings('John', 'Smith');
 
  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(9);

  logSpy.mockRestore();
});

test('adds Joshua + Grunt to equal 11)', () => {
  const logSpy = jest.spyOn(global.console, 'log');
  sumofStrings('Joshua', 'Grunt');
 
  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(11);

  logSpy.mockRestore();
});

test('adds Matthew + McConaughey to equal 18)', () => {
  const logSpy = jest.spyOn(global.console, 'log');
  sumofStrings('Matthew', 'McConaughey');
 
  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(18);

  logSpy.mockRestore();
});