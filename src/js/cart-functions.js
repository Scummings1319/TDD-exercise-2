module.exports.calculateChange = (total, payment) => {
  return payment - total;
};
module.exports.isSufficientPayment = (total, payment) => {
  return payment >= total;
};
module.exports.calculateTotal = (itemsArray) => {
  var sum = 0.0;
  for (const item of itemsArray) {
    sum += item.price;
  }
  return sum;
};
module.exports.addItem = (itemsArray, name, price) => {
  itemsArray.push({ name, price });
};
module.exports.removeItem = (itemsArray, index) => {
  itemsArray.splice(index, 1);
};
