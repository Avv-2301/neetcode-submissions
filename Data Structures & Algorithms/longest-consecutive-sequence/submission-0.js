class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let n = nums.length;
        if (n === 0) return 0;

        let longest = 1;
        let set = new Set();

        for (let i = 0; i < n; i++) {
            set.add(nums[i]);
        }

        for (let ele of set) {
            if (!set.has(ele - 1)) {
                let count = 1;
                let x = ele;

                while (set.has(x + 1)) {
                    count++;
                    x = x + 1;
                }
                longest = Math.max(longest, count);
            }
        }
        return longest;
    }
}
