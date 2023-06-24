// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// O(n) - time
// O(n) - space
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let last = right;
  while (left <= right) {
    const a = nums[left] * nums[left];
    const b = nums[right] * nums[right];
    if (a < b) {
      result[last] = b;
      right -= 1;
    } else {
      result[last] = a;
      left += 1;
    }
    last -= 1;
  }
  return result;
};
