import { weekDay } from "../src/date";

describe('Test date', () => {
    it("Should return days of the week", () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "27.08.2023");
       
        const logSpy = jest.spyOn(global.console, 'log');
        weekDay();

        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith('ВС');

        logSpy.mockRestore();
    });
});

