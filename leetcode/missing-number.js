// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    n = nums.length;
    const sum = nums.reduce((acc, num) => acc + num, 0);
    return n * (n + 1) / 2 - sum;
};
