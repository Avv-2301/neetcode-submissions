class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length;
        let result = new Array(n).fill(0);
        let stack = [];

        for (let i = 0; i < n; i++) {
            let t = temperatures[i];
            while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                const [stackT, stackInd] = stack.pop();
                result[stackInd] = i - stackInd;
            }
            stack.push([t, i]);
        }
        return result;
    }
}
