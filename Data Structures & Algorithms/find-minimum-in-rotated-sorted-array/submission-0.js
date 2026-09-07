class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0;
        let high = nums.length - 1;

        if (nums[low] < nums[high]) {
            return nums[low];
        }

        while (low < high) {
            let mid = Math.floor(low + (high - low) / 2);

            if (nums[mid] > nums[high]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return nums[low];
    }
}
