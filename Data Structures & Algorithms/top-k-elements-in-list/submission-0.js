class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let result = [];

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for (let [key, value] of map) {
            if (value >= k) {
                result.push(key);
            }
        }
        return result;
    }
}
