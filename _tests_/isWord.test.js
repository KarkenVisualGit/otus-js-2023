const isWord = require("../src/isWord");

describe("Test isWord", () => {
  it("Must return true for only word MarryPoppins", () => {
    expect(isWord("MarryPoppins")).toEqual(true);
  });

  it("Must return false for Abay's Way", () => {
    expect(isWord("Abay's Way")).toEqual(false);
  });

  it("Must return false for Chick flick", () => {
    expect(isWord("Chick" + "\n" + "flick")).toEqual(false);
  });

  it("Must return true for word", () => {
    expect(isWord("word")).toEqual(true);
  });
});
