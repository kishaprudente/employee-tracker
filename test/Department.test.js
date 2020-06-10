const Department = require("../lib/Department");

describe("Department", () => {
  describe("Initialization", () => {
    test("Should create an object with 'name' string", () => {
      const name = "Engineering";
      const department = new Department(name);

      expect(department.name).toEqual("Engineering");
    });
  });
});
