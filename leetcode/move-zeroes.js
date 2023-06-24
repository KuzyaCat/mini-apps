// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// O(n) - time
// O(1) - space
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zeroesCount = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      zeroesCount += 1;
    } else if (zeroesCount > 0) {
      const temp = nums[i];
      nums[i] = 0
      nums[i - zeroesCount] = temp;
    }
  }
};
