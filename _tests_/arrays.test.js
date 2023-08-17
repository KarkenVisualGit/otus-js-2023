const arrayElements = require('../src/arrays');

describe('Test arrayElements', () => {
    it("Must console log sum of elements, min and max elements", () => {
        const nums = [5, 1, 3, 3, 7, 2, 5, 2, 2, 7];
        const logSpy = jest.spyOn(global.console, 'log');
        arrayElements(nums);
        

        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(3);

        expect(logSpy).toHaveBeenCalledWith(37);
        expect(logSpy).toHaveBeenCalledWith(7);
        expect(logSpy.mock.calls).toContainEqual([1]);

        logSpy.mockRestore();

        
    });
});
describe('Test arrayElements', () => {
    it("Must return doubled array", () => {
        const nums = [5, 1, 3, 3, 7, 2, 5, 2, 2, 7];
        expect(arrayElements(nums)).toEqual([10, 2, 6, 6, 14, 4, 10, 4, 4, 14]);
    });
});
