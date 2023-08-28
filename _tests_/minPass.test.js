import { minPassed } from "../src/minPass";
const RealDate = Date.now();

beforeAll(() => {
    global.Date.now = jest.fn(() => new Date('2023-08-27T20:53:30Z').getTime())
})

afterAll(() => {
    global.Date.now = RealDate
})
describe('Test minPassed', () => {
    it("returns minutes passed from today", async () => {
        const logSpy = jest.spyOn(global.console, 'log');
        minPassed();

        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith(1253);

        logSpy.mockRestore();
    });
});