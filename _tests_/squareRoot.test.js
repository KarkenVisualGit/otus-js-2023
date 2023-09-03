import { calculateSquareRoot } from "../src/squareRoot";
describe("Test calculateSquareRoot", () => {
  jest.spyOn(window, "prompt")
  .mockReturnValueOnce("1")
  .mockReturnValueOnce("3")
  .mockReturnValueOnce("-4");

const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

test("calculateSquareRoot calculates and logs correct roots", () => {
  calculateSquareRoot();

  expect(consoleLogSpy).toHaveBeenCalledWith("X1= 1", "X2 = -4");
});

test("calculateSquareRoot logs \"The equation has no roots\" for negative discriminant", () => {
  jest.clearAllMocks();
  jest.spyOn(window, "prompt")
    .mockReturnValueOnce("1")
    .mockReturnValueOnce("2")
    .mockReturnValueOnce("3");

  calculateSquareRoot();

  expect(consoleLogSpy).toHaveBeenCalledWith("The equation has no roots");
});

test("calculateSquareRoot calculates and logs one root", () => {
  jest.clearAllMocks();
  jest.spyOn(window, "prompt")
    .mockReturnValueOnce("1")
    .mockReturnValueOnce("-2")
    .mockReturnValueOnce("1");

  calculateSquareRoot();

  expect(consoleLogSpy).toHaveBeenCalledWith("X = 1");
});

// Restore original implementations after tests
afterAll(() => {
  window.prompt.mockRestore();
  console.log.mockRestore();
});
  
});
