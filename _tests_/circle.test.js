import { calculateCircleProperties } from "../src/circle";

test("calculateCircleProperties calculates length and area correctly", () => {
    const r = 5; // Simulated radius for testing
    const expectedCircleLength = Math.floor(2 * Math.PI * r);
    const expectedCircleArea = Math.floor(Math.PI * Math.pow(r, 2));
  
    const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  
    const result = calculateCircleProperties(r);
  
    expect(result.circleLength).toBe(expectedCircleLength);
    expect(result.circleArea).toBe(expectedCircleArea);

    calculateCircleProperties(r);
    
    expect(consoleLogSpy).toHaveBeenCalledWith(expectedCircleLength);
    expect(consoleLogSpy).toHaveBeenCalledWith(expectedCircleArea);
  
    consoleLogSpy.mockRestore(); 
  });