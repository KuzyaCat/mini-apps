// A message containing letters from A-Z can be encoded into numbers using the following mapping:
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:
// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".
// Given a string s containing only digits, return the number of ways to decode it.
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (!s.length) {
    return 0;
  }
  const n = s.length;
  const memo = new Array(n + 1).fill(0);
  memo[0] = 1;
  memo[1] = s.substring(0, 1) !== '0' ? 1 : 0;
  for (let i = 2; i < n + 1; i += 1) {
    const oneChar = s.substring(i - 1, i);
    const twoChars = s.substring(i - 2, i);
    if (Number(oneChar) >= 1 && Number(oneChar) <= 9) {
      memo[i] += memo[i - 1];
    }
    if (Number(twoChars) >= 10 && Number(twoChars) <= 26) {
      memo[i] += memo[i - 2];
    }
  }
  return memo[n];
};
