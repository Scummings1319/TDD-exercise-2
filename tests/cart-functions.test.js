const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("total 5,payment6, should be 1", () => {
    expect(calculateChange(5, 6)).toEqual(1);
  });
  test("total 12.30, payment13.03, should be 0.73", () => {
    expect(calculateChange(12.3, 13.03)).toEqual(0.7299999999999986);
  });
  test("total 25, payment50, should be 25", () => {
    expect(calculateChange(25, 50)).toEqual(25);
  });
});

describe("isSufficientPayment", () => {
  test("when total is 5 and payment is 6, should be true", () => {
    expect(isSufficientPayment(5, 6)).toEqual(true);
  });
  test("when total is 10 and payment is 7, should be true", () => {
    expect(isSufficientPayment(10, 7)).toEqual(false);
  });
  test("when total is 3 and payment is 3, should be true", () => {
    expect(isSufficientPayment(3, 3)).toEqual(true);
  });
  test("when total is 25 and payment is 50, should be true", () => {
    expect(isSufficientPayment(25, 50)).toEqual(true);
  });
});

describe("calculateTotal", () => {
  test("when price is 4.99 should be 4.99", () => {
    var itemsArray = [
      {
        name: "jelly",
        price: 4.99,
      },
    ];
    expect(calculateTotal(itemsArray)).toEqual(4.99);
  });
  test("when price is 3.50,12.99,0.03 should be 16.52", () => {
    var itemsArray = [
      {
        name: "peanut butter",
        price: 3.5,
      },
      {
        name: "turkey",
        price: 12.99,
      },
      {
        name: "bubblegum",
        price: 0.03,
      },
    ];
    expect(calculateTotal(itemsArray)).toBeCloseTo(16.52);
  });
  test("when cart is empty, should be 0", () => {
    var itemsArray = [];
    expect(calculateTotal(itemsArray)).toEqual(0);
  });
  test("when price is 25,25 should be 50", () => {
    var itemsArray = [
      {
        name: "steak",
        price: 25,
      },
      {
        name: "chicken",
        price: 25,
      },
    ];
    expect(calculateTotal(itemsArray)).toEqual(50);
  });
});

describe("addItem", () => {
  test("beans should be added to array", () => {
    //arrange
    var array = [];
    //act
    addItem(array, "beans", 3);
    //assert
    expect(array[0]).toEqual({ name: "beans", price: 3 });
  });
  test("sugar should be added to array", () => {
    //arrange
    var array = [{ name: "beans", price: 3 }];
    //act
    addItem(array, "sugar", 2);
    //assert
    expect(array[1]).toEqual({ name: "sugar", price: 2 });
  });
  test("salt should be added to array", () => {
    //arrange
    var array = [
      { name: "beans", price: 3 },
      { name: "jelly", price: 4 },
      { name: "sugar", price: 2 },
    ];
    //act
    addItem(array, "salt", 2);
    //assert
    expect(array[3]).toEqual({ name: "salt", price: 2 });
  });
});

describe("removeItem", () => {
  test("should remove first element of 3", () => {
    var array = [
      { name: "beans", price: 3 },
      { name: "jelly", price: 4 },
      { name: "sugar", price: 2 },
    ];
    removeItem(array, 0);
    expect(array[0]).toEqual({ name: "jelly", price: 4 });
  });
  test("should remove last element of 3", () => {
    var array = [
      { name: "beans", price: 3 },
      { name: "jelly", price: 4 },
      { name: "sugar", price: 2 },
    ];
    removeItem(array, 2);
    expect(array[array.length - 1]).toEqual({ name: "jelly", price: 4 });
  });
  test("should remove middle element of 3", () => {
    var array = [
      { name: "beans", price: 3 },
      { name: "jelly", price: 4 },
      { name: "sugar", price: 2 },
    ];
    removeItem(array, 1);
    expect(array[1]).toEqual({ name: "sugar", price: 2 });
  });
  test("should remove middle element of 3", () => {
    var array = [{ name: "beans", price: 3 }];
    removeItem(array, 0);
    expect(array).toEqual([]);
  });
});
