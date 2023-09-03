import {sumofDigits} from "../src/sumofDigits";
// const sumofDigits = require('../src/sumofDigits');

test("Sum of digits from 50 to 100 to be 3825)", () => {
    const logSpy = jest.spyOn(global.console, "log");
    sumofDigits();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(3825);

    logSpy.mockRestore();
});