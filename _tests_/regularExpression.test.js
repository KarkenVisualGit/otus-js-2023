import { regExp } from "../src/regularExpression";

describe("Regular Expressions", () => {
  jest.spyOn(window, "prompt").mockImplementation(() => "23.05.1996");

  const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

  afterAll(() => {
    window.prompt.mockRestore();
    console.log.mockRestore();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("matches valid date format", () => {
    regExp();
    expect(consoleLogSpy).toHaveBeenCalledWith("valid date");
  });

  it("does not match invalid date format", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "32.05.1996");
    expect(() => {
      regExp();
    }).toThrowError(Error("Invalid data"));
  });

  it("matches valid phone number format", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "+7 999 999-99-99");
    regExp();
    expect(consoleLogSpy).toHaveBeenCalledWith("valid phone number");
  });

  it("should throw an error when phone number format does not match ", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "+70 9999 999-99-99");
    expect(() => {
      regExp();
    }).toThrowError(Error("Invalid data"));
  });

  it("matches valid email format", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "john@gmail.com");
    regExp();
    expect(consoleLogSpy).toHaveBeenCalledWith("valid email");
  });

  it("does not match invalid email format", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "john@gmailcom");
    expect(() => {
      regExp();
    }).toThrowError(Error("Invalid data"));
  });
});
