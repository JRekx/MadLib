const { addCommas } = require("./addCommas");

describe("addCommas", () => {
  test("adds commas to a whole number", () => {
    expect(addCommas(1000)).toBe("1,000");
  });

  test("adds commas to a decimal number", () => {
    expect(addCommas(1000.5)).toBe("1,000.5");
  });

  test("returns original number if less than 1000", () => {
    expect(addCommas(500)).toBe("500");
  });

  test("handles negative numbers", () => {
    expect(addCommas(-1000)).toBe("-1,000");
  });

  test("handles very large numbers", () => {
    expect(addCommas(123456789)).toBe("123,456,789");
  });

  test("handles very small numbers", () => {
    expect(addCommas(0.00001)).toBe("0.00001");
  });

  test("handles non-numbers", () => {
    expect(addCommas("abc")).toBe("abc");
  });
});
