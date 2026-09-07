class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = [];
        let set = [];
        nums.sort((a, b) => a - b);
        this.getAllSubsets(nums, 0, res, set);
        return res;
    }

    getAllSubsets(nums, i, res, set) {
        res.push([...set]);
        for (let j = i; j < nums.length; j++) {
            if (j > i && nums[j] === nums[j - 1]) {
                continue;
            }
            set.push(nums[j]);
            this.getAllSubsets(nums, j + 1, res, set);
            set.pop();
        }
    }
}
