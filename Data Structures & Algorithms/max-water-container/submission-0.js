class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
        let n = heights.length;

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let height = Math.min(heights[i], heights[j]);
                let width = j - i;
                let area = height * width;
                maxWater = Math.max(maxWater, area);
            }
        }
        return maxWater;
    }
}
