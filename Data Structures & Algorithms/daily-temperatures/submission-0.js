class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array().fill(0);
        let n = temperatures.length;
        for (let i = 0; i < n; i++) {
            let j = i + 1;
            let count = 1;
            while (j < n) {
                if (temperatures[j] > temperatures[i]) {
                    break;
                }
                j++;
                count++;
            }
            count = j === n ? 0 : count;
            result[i] = count;
        }
        return result;
    }
}
