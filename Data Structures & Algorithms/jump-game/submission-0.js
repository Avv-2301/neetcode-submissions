class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let goal = 0;
        for (let i = 0; i < nums.length; i++) {
            if (i > goal) {
                return false;
            }

            goal = Math.max(goal, i + nums[i]);
        }
        return true;
    }
}
