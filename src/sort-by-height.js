const { NotImplementedError } = require("../lib");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sorted = arr
    .filter((i) => {
      return i !== -1; // убираем все -1
    })
    .sort((a, b) => a - b); // сортируем все без -1
  return arr.map((i) => {
    // собираем обратно с -1 и др элементами
    if (i === -1) {
      return -1;
    } else {
      return sorted.shift(); // берем следующий элемент из отсортированного массива
    }
  });
}

module.exports = {
  sortByHeight,
};
