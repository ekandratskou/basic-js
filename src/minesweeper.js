const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  for (let i = 0; i < matrix.length; i += 1) {
    res[i] = []; // создаём пустую строку (массив) на позиции i
    for (let j = 0; j < matrix[i].length; j += 1) {
      let count = 0;
      //обход всех соседних клеток вокруг [i][j]
      for (let x = i - 1; x <= i + 1; x += 1) {
        // i - 1 строка выше
        for (let y = j - 1; y <= j + 1; y += 1) {
          // i + 1 строка ниже
          if (x === i && y === j) {
            continue; // пропускаем саму клетку
          }
          // Проверка: если сосед существует и там мина
          if (matrix[x]?.[y]) count++; //гарантирует, что мы не выйдем за пределы матрицы x >= 0 && x < rows && y >= 0 && y < cols
        }
      }
      res[i][j] = count;
    }
  }
  return res;
}

module.exports = {
  minesweeper,
};
