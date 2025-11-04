const { NotImplementedError } = require("../lib");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  while (n >= 10) {
    let str = String(n);
    let arr = str.split("");
    const nums = arr.map(Number);
    let res = 0;
    nums.forEach((i) => {
      res = res + i;
    });
    n = res;
  }
  return n;
}

module.exports = {
  getSumOfDigits,
};
