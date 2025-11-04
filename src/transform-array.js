const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const res = [];
  let skipNext = false; //Флаг, чтобы пропустить элемент после --discard-next.

  for (let i = 0; i < arr.length; i++) {
    if (skipNext) {
      skipNext = false;
      continue;
    }

    const curr = arr[i];

    if (curr === "--discard-next") {
      if (i + 1 < arr.length) skipNext = true;
    } else if (curr === "--discard-prev") {
      if (i > 0 && arr[i - 2] !== "--discard-next") res.pop(); // arr[i - 2] - Это защита от ситуации, когда --discard-next удалил элемент, а потом --discard-prev или --double-prev пытается к нему обратиться.
    } else if (curr === "--double-next") {
      if (i + 1 < arr.length) res.push(arr[i + 1]);
    } else if (curr === "--double-prev") {
      if (i > 0 && arr[i - 2] !== "--discard-next") res.push(arr[i - 1]);
    } else {
      res.push(curr);
    }
  }

  return res;
}

module.exports = {
  transform,
};
