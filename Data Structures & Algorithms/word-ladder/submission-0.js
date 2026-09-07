class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        let q = [[beginWord, 1]];
        let set = new Set(wordList);
        set.delete(beginWord);

        while (q.length > 0) {
            let [word, steps] = q.shift();
            if (word === endWord) return steps;

            for (let i = 0; i < word.length; i++) {
                for (let ch = 97; ch <= 122; ch++) {
                    let newWord =
                        word.substring(0, i) + String.fromCharCode(ch) + word.substring(i + 1);
                    if (set.has(newWord)) {
                        set.delete(newWord);
                        q.push([newWord, steps + 1]);
                    }
                }
            }
        }
        return 0;
    }
}
