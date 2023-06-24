// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without
// disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
// O(n) - time
// O(1) - space
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length > t.length) {
    return false;
  }
  let si = 0;
  for (let i = 0; i < t.length; i += 1) {
    if (s[si] === t[i]) {
      si += 1;
    }
  }
  return si === s.length;
};
