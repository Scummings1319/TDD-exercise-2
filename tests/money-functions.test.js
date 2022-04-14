const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("amount is 0, should be $0.00", () => {
    expect(formatCurrency(0)).toEqual("$0.00");
  });
  test("amount is 1, should be $1.00", () => {
    expect(formatCurrency(1)).toEqual("$1.00");
  });
  test("amount is 1.50, should be $1.50", () => {
    expect(formatCurrency(1.5)).toEqual("$1.50");
  });
  test("amount is 0.01, should be $0.01", () => {
    expect(formatCurrency(0.01)).toEqual("$0.01");
  });
  test("amount is 527.68, should be $527.68", () => {
    expect(formatCurrency(527.68)).toBeCloseTo("$527.68");
  });
  test("amount is -1, should be -$1.00", () => {
    expect(formatCurrency(-1)).toEqual("-$1.00");
  });
  test("amount is 2, should be $2.00", () => {
    expect(formatCurrency(2)).toEqual("$2.00");
  });
  test("amount is -2121, should be $-2121.00", () => {
    expect(formatCurrency(-2121)).toEqual("-$2121.00");
  });
});

describe("getCoins", () => {
  test("32 cents gives back 1 quarter, 1 nickel 2 pennies", () => {
    expect(getCoins(32)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
  });
  test("10 cents gives back 1 dime", () => {
    expect(getCoins(10)).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0,
    });
  });
  test("27 cents gives back 1 quarter, 2 pennies", () => {
    expect(getCoins(27)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2,
    });
  });
  test("68 cents gives back 2 quarter, 1 dime, 1 nickel 3 pennies", () => {
    expect(getCoins(68)).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3,
    });
  });
});
