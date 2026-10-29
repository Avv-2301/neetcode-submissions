class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        const n = arr.length;
        let res = 0;
        let cnt = 0;
        let sign = -1;

        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                cnt = sign === 0 ? cnt + 1 : 1;
                sign = 1;
            } else if (arr[i] < arr[i + 1]) {
                cnt = sign === 1 ? cnt + 1 : 1;
                sign = 0;
            } else {
                cnt = 0;
                sign = -1;
            }
            res = Math.max(res, cnt);
        }
        return res + 1;
    }
}
