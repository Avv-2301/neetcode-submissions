class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n = s.length;
        let left = 0;
        let set = new Set();
        let maxLen = 0;

        for (let right = 0; right < n; right++) {
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            set.add(s[right]);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}
