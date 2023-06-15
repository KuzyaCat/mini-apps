// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1 || n === 2) {
        return n;
    }
    let n1 = 1;
    let n2 = 2;
    for (let i = 3; i <= n; i += 1) {
        const temp = n1;
        n1 = n2;
        n2 = temp + n2;
    }

    return n2;
};
