class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        let comb = [];
        this.getAllCombinations(nums, 0, res, comb, target);
        return res;
    }

    getAllCombinations(nums, i, res, comb, target) {
        if (target === 0) {
            res.push([...comb]);
        } else if (target < 0 || i >= nums.length) {
            return;
        } else {
            comb.push(nums[i]);
            this.getAllCombinations(nums, i, res, comb, target - nums[i]);
            comb.pop();
            this.getAllCombinations(nums, i + 1, res, comb, target);
        }
    }
}
