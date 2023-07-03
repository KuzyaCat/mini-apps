// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.
// O(amount * coins.length) - time, O(amount) - space
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (!amount) return 0;
  const memo = new Array(amount + 1).fill(amount + 1);
  memo[0] = 0;

  for (let i = 1; i <= amount; i += 1) {
    for (let coin of coins) {
      if (coin <= i) {
        memo[i] = Math.min(memo[i], memo[i - coin] + 1);
      }
    }
  }

  return memo[amount] > amount ? -1 : memo[amount];
};
