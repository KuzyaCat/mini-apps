// Given an m x n matrix, return all elements of the matrix in spiral order.
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const total = m * n;
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = m - 1;
  const result = [];
  while (result.length < total) {
    for (let i = left; i <= right; i += 1) {
      result.push(matrix[top][i]);
    }
    top += 1;
    for (let i = top; i <= bottom; i += 1) {
      result.push(matrix[i][right]);
    }
    right -= 1;
    if (result.length === total) {
      break;
    }
    for (let i = right; i >= left; i -= 1) {
      result.push(matrix[bottom][i]);
    }
    bottom -= 1;
    for (let i = bottom; i >= top; i -= 1) {
      result.push(matrix[i][left]);
    }
    left += 1;
  }
  return result;
};
