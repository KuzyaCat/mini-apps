// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle.
// That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected,
// and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  const max1 = helper(nums, 1, nums.length);
  const max2 = helper(nums, 0, nums.length - 1);
  return Math.max(max1, max2);
};

function helper(nums, start, end) {
  let prev1 = 0;
  let prev2 = 0;
  for (let i = start; i < end; i += 1) {
    const num = nums[i];
    const temp = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = temp;
  }
  return prev1;
}
