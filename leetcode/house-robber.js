// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and
// it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// #1 Iterative + 2 pointers
// O(n) - time, O(1) - space
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) {
    return 0;
  }
  let prev1 = 0;
  let prev2 = 0;
  for (const num of nums) {
    const temp = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = temp;
  }
  return prev1;
};

// #2 Iterative + memo
// O(n) - time, O(n) - space
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) {
    return 0;
  }
  const memo = new Array(nums.length + 1);
  memo[0] = 0;
  memo[1] = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    const num = nums[i];
    memo[i + 1] = Math.max(memo[i], memo[i - 1] + num);
  }
  return memo[nums.length];
};

// #3 Recursion
// O(n) - time, O(n) - space
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) {
    return 0;
  }
  const memo = new Array(nums.length + 1).fill(-1);
  return robHelper(nums, nums.length - 1, memo);
};

function robHelper(nums, i, memo) {
  if (i < 0) {
    return 0;
  }
  if (memo[i] >= 0) {
    return memo[i];
  }
  const max = Math.max(robHelper(nums, i - 2, memo) + nums[i], robHelper(nums, i - 1, memo));
  memo[i] = max;
  return max;
}
