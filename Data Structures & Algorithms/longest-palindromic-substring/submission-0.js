class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let result = "";
        for (let i = 0; i < s.length; i++) {
            let odd = this.expand(i, i, s);
            let even = this.expand(i, i + 1, s);

            if (odd.length > result.length) result = odd;
            if (even.length > result.length) result = even;
        }
        return result;
    }

    expand(left, right, s) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }
}
