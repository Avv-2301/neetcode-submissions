class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = Array.from({ length: n }, () => []);
        let visited = Array(n).fill(false);

        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const dfs = (node) => {
            for (const nei of adj[node]) {
                if (!visited[nei]) {
                    visited[nei] = true;
                    dfs(nei);
                }
            }
        };

        let res = 0;
        for (let node = 0; node < n; node++) {
            if (!visited[node]) {
                visited[node] = true;
                dfs(node);
                res++;
            }
        }
        return res;
    }
}
