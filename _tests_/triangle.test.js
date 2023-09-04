import { checkTriangleSides } from "../src/triangle";

test("Triangle with valid sides should log 'Triangle is rectangle'", () => {
  const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

  checkTriangleSides(3, 5, 4);

  expect(consoleLogSpy).toHaveBeenCalledWith("Triangle is rectangle");

  consoleLogSpy.mockRestore();
});

test("Triangle with invalid sides should throw an error", () => {
  expect(() => {
    checkTriangleSides(6, 4, 3);
  }).toThrowError("Triangle is not rectangular");
});
