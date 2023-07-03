// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// O(2n) - time
// O(n) - space
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const result = [1];
  for (let i = 1; i < nums.length; i += 1) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    result[i] *= right;
    right *= nums[i];
  }
  return result;
};
