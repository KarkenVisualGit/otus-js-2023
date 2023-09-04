import { calculateCircleProperties } from "../src/circle";

test("calculateCircleProperties calculates length and area correctly", () => {
  const r = 5; // Simulated radius for testing

  const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

  const result = calculateCircleProperties(r);

  expect(result.circleLength).toBe(31);
  expect(result.circleArea).toBe(78);

  expect(consoleLogSpy).toHaveBeenCalledWith(31);
  expect(consoleLogSpy).toHaveBeenCalledWith(78);

  consoleLogSpy.mockRestore();
});
