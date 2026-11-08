class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
        let n = heights.length;

        let left = 0;
        let right = n - 1;

        while (left <= right) {
            let minHeight = Math.min(heights[left], heights[right]);
            let width = right - left;
            let area = minHeight * width;
            maxWater = Math.max(maxWater, area);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxWater;
    }
}
