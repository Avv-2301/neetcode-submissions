class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let res = [];
        let part = [];
        this.getPartitioning(0, res, part, s);
        return res;
    }

    getPartitioning(i, res, part, s) {
        if (i >= s.length) {
            res.push([...part]);
            return res;
        }

        for (let j = i; j < s.length; j++) {
            if (this.isPalli(s, i, j)) {
                part.push(s.substring(i, j + 1));
                this.getPartitioning(j + 1, res, part, s);
                part.pop();
            }
        }
    }

    isPalli(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
