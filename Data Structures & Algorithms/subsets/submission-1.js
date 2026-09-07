class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [];
        let subset = [];
        this.getAllSubsets(nums, 0, subset, res);
        return res;
    }

    //to calculate all subsets
    getAllSubsets(nums, i, subset, res) {
        if (i >= nums.length) {
            res.push([...subset]);
            return;
        }
        //to include
        subset.push(nums[i]);
        this.getAllSubsets(nums, i + 1, subset, res);

        //to exclude
        subset.pop(); //backtracking
        this.getAllSubsets(nums, i + 1, subset, res);
    }
}
