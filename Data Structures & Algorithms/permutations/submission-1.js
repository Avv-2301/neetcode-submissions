class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        this.getAllPermutations(nums, res, 0);
        return res;
    }

    getAllPermutations(nums, res, idx) {
        if (idx === nums.length) {
            res.push([...nums]);
            return;
        }

        for (let i = idx; i < nums.length; i++) {
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
            this.getAllPermutations(nums, res, idx + 1);
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
        }
    }
}
