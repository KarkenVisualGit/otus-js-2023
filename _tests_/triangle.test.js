import { checkTriangleSides } from "../src/triangle";

test("Triangle with valid sides should log 'Triangle is rectangle'", () => {
  const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

  checkTriangleSides(3, 4, 5);

  expect(consoleLogSpy).toHaveBeenCalledWith("Triangle is rectangle");

  consoleLogSpy.mockRestore();
});

test("Triangle with invalid sides should throw an error", () => {
  expect(() => {
    checkTriangleSides(3, 4, 6);
  }).toThrowError("Triangle is not rectangular");
});
