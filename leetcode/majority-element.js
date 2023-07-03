// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.
// O(n) - time
// O(1) - space
// O(nlogn) - time in case of sorting
/**
 * @param {number[]} nums
 * @return {number}
 */
// Moore Voting Algorithm
var majorityElement = function(nums) {
  let count = 0;
  let candidate = 0;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    if (num === candidate) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return candidate;
};
// 2nd solution: sort and take middle element
