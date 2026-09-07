class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        const bucket = new Array(nums.length + 1).fill().map(() => []);

        for (const [num, value] of map) {
            bucket[value].push(num);
        }

        const result = [];

        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const num of bucket[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }
        return result;
    }
}
