import { thing } from ".";

describe("@tnezdev/package-name", () => {
  describe("#thing", () => {
    it("should return expected value", () => {
      const result = thing();
      expect(result).toBe(42);
    });
  });
});
