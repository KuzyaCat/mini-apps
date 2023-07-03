// Given an integer array nums, find a subarray that has the largest product, and return the product.
// O(n) - time, O(1) - space
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (!nums.length) return 0;
  let prod = 1;
  let max = Number.MIN_VALUE;
  for (let i = 0; i < nums.length; i += 1) {
    prod *= nums[i];
    max = Math.max(prod, max);
    if (!prod) {
      prod = 1;
    }
  }
  prod = 1;
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    prod *= nums[i];
    max = Math.max(prod, max);
    if (!prod) {
      prod = 1;
    }
  }
  return max;
};
