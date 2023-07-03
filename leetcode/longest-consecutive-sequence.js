// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
// O(2n) - time
// O(n) - space
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i += 1) {
    map[nums[i]] = true;
  }

  let longest = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (!map[nums[i]]) {
      continue;
    }
    let j = 0;
    let current = 0;
    while (map[nums[i] + j]) {
      j += 1;
      current += 1;
    }
    longest = Math.max(longest, current);
  }
  return longest;
};
