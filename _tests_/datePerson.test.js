import { getOlder } from "../src/datePersons";

describe('Test getOlder', () => {
    
    it("Should return younger person", () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "01.01.1979");
        jest.spyOn(window, "prompt").mockImplementation(() => "15.06.1972");
        
        const logSpy = jest.spyOn(global.console, 'log');
        getOlder();

        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith('First person is younger');

        logSpy.mockRestore();
    });
});