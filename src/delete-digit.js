const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  let maxNumb = 0;
  for (let i = 0; i < str.length; i += 1) {
    const newStr = str.slice(0, i) + str.slice(i + 1);
    const curNumb = parseInt(newStr, 10);
    if (curNumb > maxNumb) {
      maxNumb = curNumb;
    }
  }
  return maxNumb;
}

module.exports = {
  deleteDigit,
};
