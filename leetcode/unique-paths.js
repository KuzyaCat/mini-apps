// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
// The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  return dp(m, n, 0, 0, 1);
};

function dp(m, n, verticalIndex, horizontalIndex, ways) {
  if (verticalIndex === m - 1 && horizontalIndex === n - 1) {
    return ways;
  }
  if (verticalIndex === m - 1 || horizontalIndex === n - 1) {
    return 1;
  }

  return dp(m, n, verticalIndex + 1, horizontalIndex, ways + 1) + dp(m, n, verticalIndex, horizontalIndex + 1, ways + 1);
}
// optimization: add memoization
