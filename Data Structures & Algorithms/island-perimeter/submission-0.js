class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const m = grid.length;
        const n = grid[0].length;
        let res = 0;

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] === 1) {
                    res += 4;

                    if (r > 0 && grid[r - 1][c] === 1) {
                        res -= 2;
                    }
                    if (c > 0 && grid[r][c - 1] === 1) {
                        res -= 2;
                    }
                }
            }
        }
        return res;
    }
}
