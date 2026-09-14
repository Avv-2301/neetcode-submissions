class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let dp = [];
        dp.push(nums[0]);

        let LIS = 1;

        for (let i = 0; i < nums.length; i++) {
            if (dp[dp.length - 1] < nums[i]) {
                dp.push(nums[i]);
                LIS++;
                continue;
            }

            let left = 0;
            let right = dp.length - 1;

            while (left < right) {
                let mid = Math.floor(left + (right - left) / 2);
                if (dp[mid] < nums[i]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            dp[left] = nums[i];
        }
        return LIS;
    }
}
