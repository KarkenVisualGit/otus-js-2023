import { calculateSquareRoot } from '../src/squareRoot';

describe('calculateSquareRoot', () => {
  it('returns correct roots for quadratic equation with two real roots', () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "1");
    jest.spyOn(window, "prompt").mockImplementation(() => "-3");
    jest.spyOn(window, "prompt").mockImplementation(() => "2");
    const logSpy = jest.spyOn(global.console, 'log');
    // const a = 1;
    // const b = -3;
    // const c = 2;
    
    // const result = calculateSquareRoot(a, b, c);
    calculateSquareRoot();
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith({ roots: [2, 1], message: '' });

    expect(result.roots).toEqual([2, 1]);
    expect(result.message).toBe('');
  });

  it('returns correct root for quadratic equation with one real root', () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "1");
    jest.spyOn(window, "prompt").mockImplementation(() => "-2");
    jest.spyOn(window, "prompt").mockImplementation(() => "1");
    const logSpy = jest.spyOn(global.console, 'log');
    // const a = 1;
    // const b = -2;
    // const c = 1;

    // const result = calculateSquareRoot(a, b, c);
    calculateSquareRoot();
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith({ roots: [1], message: '' });
    expect(result.roots).toEqual([1]);
    expect(result.message).toBe('');
  });

  it('returns no roots message for quadratic equation with no real roots', () => {
    const a = 1;
    const b = 1;
    const c = 1;

    const result = calculateSquareRoot(a, b, c);

    expect(result.roots).toEqual([]);
    expect(result.message).toBe('The equation has no roots');
  });
});
