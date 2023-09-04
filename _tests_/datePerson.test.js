import { calculateAgeDifference, getYounger } from "../src/datePersons";

describe("calculateAgeDifference", () => {
  it("calculates the correct age difference", () => {
    const date1 = new Date("01.01.2000");
    const date2 = new Date("01.01.1990");

    const ageDifference = calculateAgeDifference(date1, date2);

    expect(ageDifference).toBeLessThan(0);
  });
});

describe("getYounger", () => {
  it("returns the correct result for the younger person", () => {
    const person1 = {
      date: new Date("01.01.2000"),
      name: "First person",
    };
    const person2 = {
      date: new Date("01.01.1990"),
      name: "Second person",
    };

    const result = getYounger(person1, person2);

    expect(result).toBe("First person is younger");
  });
});

describe("dates are equal", () => {
  it("Throw an error if dates are equal", () => {
    const person1 = {
      date: new Date("01.01.2000"),
      name: "First person",
    };
    const person2 = {
      date: new Date("01.01.2000"),
      name: "Second person",
    };
    expect(() => {
      getYounger(person1, person2);
    }).toThrowError("Dates are equal!");
  });
});
