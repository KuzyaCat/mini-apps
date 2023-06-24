// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// O(n) - time
// O(n) - space
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const dictionary = {};
  for (let i = 0; i < nums.length; i += 1) {
    const index = dictionary[target - nums[i]];
    if (index || index === 0) {
      return [index, i];
    }
    dictionary[nums[i]] = i;
  }
  return [];
};
