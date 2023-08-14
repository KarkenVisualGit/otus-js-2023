const objects = require('../src/Objects');

describe('Test objects', () => {
    it("returns ", () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "");
        expect(objects()).toBe();
    });
   
  });