class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let n = nums.length;
        let result = new Set();
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        let temp = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                        result.add(JSON.stringify(temp));
                    }
                }
            }
        }
        return Array.from(result).map((str) => JSON.parse(str));
    }
}
