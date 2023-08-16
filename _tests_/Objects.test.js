const mutateObject = require('../src/Objects');

describe('Test objects', () => {
    it("Enter user age returns age", () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "35");
        const obj = { name: 'John' };
        expect(mutateObject(obj)).toEqual({ name: 'John', age: 35, role: 'admin' });
    });
});

describe('Object mutation', () => {
    it("adds age to the object", () => {
        const obj = { name: 'John' };
        jest.spyOn(window, "prompt").mockReturnValueOnce('35');

        mutateObject(obj);

        expect(obj.age).toEqual(35);
    });

    it("Returns new object with role field", () => {
        const obj = { name: 'John' };

        const newObj = mutateObject(obj);

        expect(obj).not.toBe(newObj);
        expect(newObj.role).toBe('admin');

    });
})
