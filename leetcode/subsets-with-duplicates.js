// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// O(2ˆn + nlogn) - time
// O(2n) - space
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const list = [];
  const tempList = [];
  const map = {};
  nums.sort((a, b) => a - b);
  backtrack(list, tempList, nums, 0, map);
  return list;
};

function backtrack(list, tempList, nums, start, map) {
  const listStr = tempList.join('');
  if (!map[listStr]) {
    list.push([...tempList]);
    map[listStr] = true;
  }
  for (let i = start; i < nums.length; i += 1) {
    tempList.push(nums[i])
    backtrack(list, tempList, nums, i + 1, map);
    tempList.pop();
  }
}
