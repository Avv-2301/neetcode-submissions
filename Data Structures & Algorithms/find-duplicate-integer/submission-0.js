class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let seen = new Set();
        for (let n of nums) {
            if (seen.has(n)) {
                return n;
            }
            seen.add(n);
        }
        return -1;
    }
}
