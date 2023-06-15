// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let i = 0;
    while (i < nums.length) {
        let pos = nums[i] - 1;
        if (nums[i] !== nums[pos]) {
            let temp = nums[i];
            nums[i] = nums[pos];
            nums[pos] = temp;
        } else {
            i += 1;
        }
    }

    const missed = []
    nums.forEach((num, index) => {
        if (num !== index + 1) {
            missed.push(index + 1);
        }
    });

    return missed;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const unique = [...new Set(nums)];
    const missed = [];
    for (let i = 0; i < nums.length; i += 1) {
        if (!unique.includes(i + 1)) {
            missed.push(i + 1);
        }
    }

    return missed;
};
