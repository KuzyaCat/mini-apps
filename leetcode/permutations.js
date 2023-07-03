// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
/**
 * @param {number[]} nums
 * @return {number[][]}
*/
var permute = function(nums) {
  const list = [];
  const tempList = [];
  backtrack(list, tempList, nums);
  return list;
};

function backtrack(list, tempList, nums) {
  if (tempList.length === nums.length) {
    list.push([...tempList]);
    return;
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (tempList.includes(nums[i])) {
      continue;
    }
    tempList.push(nums[i]);
    backtrack(list, tempList, nums);
    tempList.pop();
  }
}
