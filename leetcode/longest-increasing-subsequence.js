// Given an integer array nums, return the length of the longest strictly increasing subsequence.
// O(nlogn) - time, O(n) - space
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums.length) return 0;
  const subsequence = [nums[0]];
  for (let i = 1; i < nums.length; i += 1) {
    const value = nums[i];
    if (value > subsequence[subsequence.length - 1]) {
      subsequence.push(value);
      continue;
    }
    const foundIndex = binarySearch(subsequence, value);
    subsequence[foundIndex] = value;
  }
  return subsequence.length;
};

function binarySearch(nums, value) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
