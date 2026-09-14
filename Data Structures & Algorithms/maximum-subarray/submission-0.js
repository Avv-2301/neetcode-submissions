class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let sum = 0;
        let maxi = nums[0];

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];

            if (sum > maxi) {
                maxi = Math.max(maxi, sum);
            }

            if (sum < 0) {
                sum = 0;
            }
        }
        return maxi;
    }
}
