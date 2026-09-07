class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }

        const m = nums1.length;
        const n = nums2.length;

        let low = 0;
        let high = m;

        const half = Math.floor((m + n + 1) / 2);

        while (low <= high) {
            const partitionA = Math.floor((low + high) / 2);
            const partitionB = half - partitionA;

            const Aleft = partitionA === 0 ? -Infinity : nums1[partitionA - 1];
            const Aright = partitionA === m ? Infinity : nums1[partitionA];

            const Bleft = partitionB === 0 ? -Infinity : nums2[partitionB - 1];
            const Bright = partitionB === n ? Infinity : nums2[partitionB];

            if (Aleft <= Bright && Bleft <= Aright) {
                if ((m + n) % 2 === 0) {
                    return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
                }

                return Math.max(Aleft, Bleft);
            }

            if (Aleft > Bright) {
                high = partitionA - 1;
            } else {
                low = partitionA + 1;
            }
        }

        throw new Error("Invalid input");
    }
}
