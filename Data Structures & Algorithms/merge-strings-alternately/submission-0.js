class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let l = 0;
        let r = 0;
        const res = [];
        const n = word1.length;
        const m = word2.length;

        while (l < n || r < m) {
            if (l < n) res.push(word1[l++]);
            if (r < m) res.push(word2[r++]);
        }
        return res.join("");
    }
}
