/*
Write a function to find the minimum number of coins needed to make a given amount.
*/

function coinChange(coins, amount) {
  // Validate input
  if (!Array.isArray(coins) || typeof amount !== "number" || amount < 0) {
    return "Invalid input";
  }

  // Initialize DP array
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  // Fill DP array
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  // If not possible, return -1
  return dp[amount] === Infinity ? -1 : dp[amount];
}