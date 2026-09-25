class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if (num1 === "0" || num2 === "0") return "0";
        const m = num1.length,
            n = num2.length;
        const digits = new Array(m + n).fill(0);

        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                const mul = Number(num1[i]) * Number(num2[j]);
                const low = i + j + 1;
                const high = i + j;

                const sum = mul + digits[low];
                digits[low] = sum % 10;
                digits[high] += Math.floor(sum / 10);
            }
        }
        return digits.join("").replace(/^0+/, "");
    }
}
