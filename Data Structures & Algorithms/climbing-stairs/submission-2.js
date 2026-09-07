class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let arr = new Array(n + 1).fill(-1);
        return this.dp(n, arr);
    }

    dp(n, arr) {
        if (n === 1 || n === 2) return n;
        if (arr[n] !== -1) {
            return arr[n];
        }

        return (arr[n] = this.dp(n - 1,arr) + this.dp(n - 2,arr));
    }
}
