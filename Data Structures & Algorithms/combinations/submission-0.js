class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];

        const backTrack = (start, comb) => {
            if (comb.length === k) {
                res.push([...comb]);
                return;
            }

            for (let i = start; i <= n; i++) {
                comb.push(i);
                backTrack(i + 1, comb);
                comb.pop();
            }
        };

        backTrack(1, []);
        return res;
    }
}
