// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const zeroes = [];
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === 0) {
        zeroes.push([i, j]);
      }
    }
  }

  for (let k = 0; k < zeroes.length; k += 1) {
    const [row, column] = zeroes[k];
    for (let i = 0; i < matrix.length; i += 1) {
      matrix[i][column] = 0;
    }
    for (let i = 0; i < matrix[0].length; i += 1) {
      matrix[row][i] = 0;
    }
  }
};
