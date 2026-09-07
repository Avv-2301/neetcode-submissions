class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        if (s.length === 0) return false;
        let stack = [];

        for (let char of s) {
            if (pairs[char]) {
                let top = stack.pop();
                if (top !== pairs[char]) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
