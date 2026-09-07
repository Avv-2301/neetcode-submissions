class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;
        for (let i = 0; i < s.length; i++) {
            res += this.helper(i, i, s);
            res += this.helper(i, i + 1, s);
        }
        return res;
    }

    helper(l, r, s) {
        let res = 0;
        while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
            res++;
            l--;
            r++;
        }
        return res;
    }
}
