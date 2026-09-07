class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let totalWater = 0;

        for (let i = 0; i < n; i++) {
            let maxLeft = 0;
            let maxRight = 0;

            for (let j = 0; j <= i; j++) {
                if (height[j] > maxLeft) {
                    maxLeft = height[j];
                }
            }

            for (let j = i; j < n; j++) {
                if (height[j] > maxRight) {
                    maxRight = height[j];
                }
            }

            totalWater += Math.min(maxLeft, maxRight) - height[i];
        }
        return totalWater;
    }
}
