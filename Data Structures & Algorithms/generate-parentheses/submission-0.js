class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];
        this.getAllParenthesis(n, res, 0, 0, "");
        return res;
    }

    getAllParenthesis(n, res, open, close, stack) {
        if (open === close && open === n) {
            res.push(stack);
            return;
        }

        if (open < n) {
            this.getAllParenthesis(n, res, open + 1, close, stack + "(");
        }

        if (close < open) {
            this.getAllParenthesis(n, res, open, close + 1, stack + ")");
        }
    }
}
