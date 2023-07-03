// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.
// Return a list of all possible strings we could create. Return the output in any order.
// O(aˆn) - time
// O(n) - space
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
  const words = [];
  const temp = [];

  function backtracking(i, str) {
    if (i >= str.length) {
      words.push(temp.join(''));
      return;
    }

    temp.push(str[i]);
    backtracking(i + 1, s);
    temp.pop();

    if (str[i].toUpperCase() === str[i].toLowerCase()) {
      return;
    }

    if (str[i].toUpperCase() === str[i]) {
      temp.push(str[i].toLowerCase());
    } else {
      temp.push(str[i].toUpperCase());
    }

    backtracking(i + 1, s);
    temp.pop();
  }

  backtracking(0, s);
  return words;
};
