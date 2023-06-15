// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seenMap = {};
    let hasDuplicates = false;
    nums.forEach((num) => {
        if (seenMap[num]) {
            hasDuplicates = true;
        }
        seenMap[num] = true;
    });
    return hasDuplicates;
};
