module.exports.formatCurrency = (amount) => {
  if (amount >= 0) {
    return "$" + amount.toFixed(2);
  } else {
    return "-$" + Math.abs(amount).toFixed(2);
  }
};
module.exports.getCoins = (cents) => {
  var coins = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };
  var quarter = Math.floor(cents / 25);
  cents = cents - 25 * quarter;
  var dime = Math.floor(cents / 10);
  cents = cents - 10 * dime;
  var nickel = Math.floor(cents / 5);
  cents = cents - 5 * nickel;
  var penny = Math.floor(cents / 1);
  cents = cents - 1 * penny;
  coins.quarters = quarter;
  coins.dimes = dime;
  coins.nickels = nickel;
  coins.pennies = penny;
  return coins;
};
