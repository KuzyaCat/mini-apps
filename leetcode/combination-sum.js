// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.
// You may return the combinations in any order.
// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique
// if the frequency of at least one of the chosen numbers is different.
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const list = [];
    const tempList = [];
    const tempListSum = 0;
    const startIndex = 0;
    backtrack(list, tempList, candidates, tempListSum, target, startIndex);
    return list;
};

function backtrack(list, tempList, candidates, tempListSum, target, currentIndex) {
  if (tempListSum > target) {
    return;
  }
  if (tempListSum === target) {
    list.push([...tempList]);
    return;
  }

  let currentSum = tempListSum;

  for (let i = currentIndex; i < candidates.length; i += 1) {
    tempList.push(candidates[i]);
    currentSum += candidates[i];
    backtrack(list, tempList, candidates, currentSum, target, i);
    currentSum -= candidates[i];
    tempList.pop();
  }
}
