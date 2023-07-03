// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// O(n) - time, O(n) - space
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums.length) {
    return 0;
  }
  const memo = new Array(nums.length);
  memo[0] = nums[0];
  dp(nums, nums.length - 1, memo);
  return Math.max(...memo);
};

function dp(nums, i, memo) {
  if (i < 0) {
    return 0;
  }
  if (memo[i]) {
    return memo[i];
  }
  memo[i] = Math.max(nums[i], dp(nums, i - 1, memo) + nums[i]);
  return memo[i];
}
