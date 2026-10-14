class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let n = nums.length;
        const map = new Map();

        for (const ele of nums) {
            map.set(ele, (map.get(ele) || 0) + 1);
            if (map.get(ele) > Math.floor(n / 2)) {
                return ele;
            }
        }
    }
}
