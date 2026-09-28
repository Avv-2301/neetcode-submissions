class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let dp = new Array(n + 1).fill(0);
        for (let i = 1; i <= n; i++) {
            dp[i] = dp[i >> n] + (i & 1);
        }
        return dp;
    }
}
