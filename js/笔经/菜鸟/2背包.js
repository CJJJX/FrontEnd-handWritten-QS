function countSortingWays(weights) {
    const MOD = 1e9 + 7;
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

    // If totalWeight is not divisible by 3, there are no valid solutions.
    if (totalWeight % 3 !== 0) {
        return 0;
    }

    const targetWeight = totalWeight / 3;

    // Initialize dp array where dp[i] indicates the number of ways to get weight i.
    const dp = Array(targetWeight + 1).fill(0);
    dp[0] = 1; // There's one way to make weight 0, by selecting no items.

    for (let weight of weights) {
        // Traverse backwards to avoid using the same item multiple times.
        for (let j = targetWeight; j >= weight; j--) {
            dp[j] = (dp[j] + dp[j - weight]) % MOD;
        }
    }

    // We need the number of ways to make up targetWeight, which is `W`.
    return dp[targetWeight];
}

// Example usage:
const weights = [1, 1 , 1];
console.log(countSortingWays(weights)); // Example output
