class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let reverse = cleaned.split('').reverse().join('');
        return cleaned === reverse;
    }
}
