// Given a string s, return the longest palindromic substring in s.
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let result = '';
  for (let i = 0; i < s.length; i += 1) {
    let temp = helper(s, i, i);
    if (temp.length > result.length) {
      result = temp;
    }
    temp = helper(s, i, i + 1);
    if (temp.length > result.length) {
      result = temp;
    }
  }
  return result;
};

function helper(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left -= 1;
    right += 1;
  }
  return s.substring(left + 1, right);
}
