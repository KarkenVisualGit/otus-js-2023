import { getOlder } from "../src/datePersons";

describe('Test getOlder', () => {
    
    it("Should return younger person", () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "15.06.1972");
        jest.spyOn(window, "prompt").mockImplementation(() => "01.01.1979");
        
        const logSpy = jest.spyOn(global.console, 'log');
        getOlder();

        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith('Second person is younger');

        logSpy.mockRestore();
    });

    it("Should return younger person", () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "01.08.1986");
        jest.spyOn(window, "prompt").mockImplementation(() => "11.02.1990");
        
        
        const logSpy = jest.spyOn(global.console, 'log');
        getOlder();

        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith('Second person is younger');

        logSpy.mockRestore();
    });

    it("Should return younger person", () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "01.09.2000");
        jest.spyOn(window, "prompt").mockImplementation(() => "11.11.1980");
        
        
        const logSpy = jest.spyOn(global.console, 'log');
        getOlder();

        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith('First person is younger');

        logSpy.mockRestore();
    });
});