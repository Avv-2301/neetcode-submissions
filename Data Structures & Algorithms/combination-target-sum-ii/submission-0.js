class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let res = [];
        let comb = [];
        candidates.sort((a, b) => a - b);
        this.getAllCombinations(candidates, 0, res, comb, target, 0);
        return res;
    }

    getAllCombinations(nums, i, res, comb, target, total) {
        if (total === target) {
            res.push([...comb]);
            return;
        } else if (i >= nums.length || total > target) {
            return;
        } else {
            comb.push(nums[i]);
            //include
            this.getAllCombinations(nums, i + 1, res, comb, target, total + nums[i]);
            comb.pop(); //backtrack

            //skip duplicates
            while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }
            this.getAllCombinations(nums, i + 1, res, comb, target, total);
        }
    }
}
