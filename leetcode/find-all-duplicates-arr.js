// Given an integer array nums of length n where all the integers of nums are in the range [1, n]
// and each integer appears once or twice, return an array of all the integers that appears twice.
// You must write an algorithm that runs in O(n) time and uses only constant extra space.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const result = [];
  for (let num of nums) {
    let index = Math.abs(num) - 1;
    if (nums[index] < 0) {
      result.push(index + 1);
    }
    nums[index] = -nums[index];
  }
  return result;
};
