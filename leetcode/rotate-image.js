// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const rowLength = matrix.length;
  for (let i = 0; i < rowLength; i += 1) {
    for (let j = 0; j <= i; j += 1) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < rowLength; i += 1) {
    matrix[i].reverse();
  }
};
