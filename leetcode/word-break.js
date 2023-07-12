// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const wordMap = {};
  wordDict.forEach((word) => wordMap[word] = true);
  const memo = new Array(s.length + 1).fill(false);
  return dp(s, 0, wordMap, memo);
};

function dp(s, startIndex, wordMap, memo) {
  if (startIndex === s.length) {
    return true;
  }
  if (memo[startIndex]) {
    return memo[startIndex];
  }
  for (let i = startIndex; i < s.length; i += 1) {
    if (wordMap[s.substring(startIndex, i + 1)]) {
      const answer = dp(s, i + 1, wordMap, memo);
      dp[i] = answer;
      if (answer) {
        return true;
      }
    }
  }
  return false;
}
