// Given an array of distinct integers nums and a target integer target,
// return the number of possible combinations that add up to target.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const memo = new Array(target + 1);
  return dp(nums, target, memo);
};

function dp(nums, remainder, memo) {
  if (remainder < 0) return 0;
  if (remainder === 0) return 1;
  if (memo[remainder]) return memo[remainder];

  let current = 0;
  for (let i = 0; i < nums.length; i += 1) {
    current += dp(nums, remainder - nums[i], memo);
  }

  memo[remainder] = current;
  return current;
}
