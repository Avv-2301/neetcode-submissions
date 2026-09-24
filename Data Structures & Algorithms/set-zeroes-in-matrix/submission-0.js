class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        let zeroRow = new Set();
        let zeroCols = new Set();

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] === 0) {
                    zeroRow.add(i);
                    zeroCols.add(j);
                }
            }
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (zeroRow.has(i) || zeroCols.has(j)) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
}
