// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.
// O(n) - time
// O(1) - space
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  for (let num of nums) {
    let index = Math.abs(num);
    if (nums[index] < 0) {
      return index;
    }
    nums[index] = -nums[index];
  }
  return nums.length;
};
