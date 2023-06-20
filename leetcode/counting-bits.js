// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
// ans[i] is the number of 1's in the binary representation of i.

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const bits = [];
    for (let i = 0; i <= n; i += 1) {
        let num = i;
        let ones = 0;
        while (num !== 0) {
            ones += num % 2;
            num = Math.floor(num / 2);
        }
        bits.push(ones);
    }
    return bits;
};
