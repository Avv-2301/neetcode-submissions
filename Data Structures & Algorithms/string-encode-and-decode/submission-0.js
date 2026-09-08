class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (const s of strs) {
            res += String(s.length + "#" + s);
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            let len = Number(str.slice(0, 1));
            let word = str.slice(j + 1, j + 1 + len);

            res.push(word);
            i = j + 1 + len;
        }
        return res;
    }
}
