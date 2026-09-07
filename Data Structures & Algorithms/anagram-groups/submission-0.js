class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let i = 0; i < strs.length; i++) {
            let word = strs[i];
            let key = word.split("").sort().join("");

            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(word);
        }
        return Array.from(map.values());
    }
}
