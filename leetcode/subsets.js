// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// O(2ˆn) - time
// O(n) - space
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const list = [];
  const tempList = [];
  backtrack(list, tempList, nums, 0);
  return list;
};

function backtrack(list, tempList, nums, start) {
  list.push([...tempList]);
  for (let i = start; i < nums.length; i += 1) {
    tempList.push(nums[i])
    backtrack(list, tempList, nums, i + 1);
    tempList.pop();
  }
}
