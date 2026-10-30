class Solution {
    /**
     * @param {string} a
     * @param {string} b
     * @return {string}
     */
    addBinary(a, b) {
        let res = [];
        let carry = 0;

        let i = a.length - 1;
        let j = b.length - 1;

        while (i >= 0 || j >= 0 || carry > 0) {
            const digitA = i >= 0 ? a[i] - "0" : 0;
            const digitB = j >= 0 ? b[j] - "0" : 0;

            const total = digitA + digitB + carry;
            res.push(total % 2);
            carry = Math.floor(total / 2);
            i--;
            j--;
        }
        res.reverse();
        return res.join('');
    }
}
