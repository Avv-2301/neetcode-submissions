class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let result = 0;
        const MAX = 2147483647;
        const MIN = -2147483648;

        while (x !== 0) {
            let lastDigit = x % 10;
            x = Math.trunc(x / 10);

            if (
                result > Math.floor(MAX / 10) ||
                (result === Math.floor(MAX / 10) && lastDigit > 7)
            ) {
                return 0;
            }
            if (
                result < Math.ceil(MIN / 10) ||
                (result === Math.ceil(MIN / 10) && lastDigit < -8)
            ) {
                return 0;
            }
            result = result * 10 + lastDigit;
        }
        return result;
    }
}
