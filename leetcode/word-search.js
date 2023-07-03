// iven an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
// The same letter cell may not be used more than once.
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (traverse(board, word, 0, i, j)) {
        return true;
      }
    }
  }
  return false;
};

function traverse(board, word, wordIndex, x, y) {
  if (wordIndex === word.length) {
    return true;
  }
  if (
    x < 0
      || y < 0
      || x > board.length - 1
      || y > board[0].length - 1
      || board[x][y] !== word[wordIndex]
  ) {
    return false;
  }
  const temp = board[x][y];
  board[x][y] = '#';
  const isFound = traverse(board, word, wordIndex + 1, x + 1, y)
    || traverse(board, word, wordIndex + 1, x - 1, y)
    || traverse(board, word, wordIndex + 1, x, y + 1)
    || traverse(board, word, wordIndex + 1, x, y - 1);

  board[x][y] = temp;
  return isFound;
}
