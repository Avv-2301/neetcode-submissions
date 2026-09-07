class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let heap = new MinPriorityQueue((point) => point[0]);

        for (const [x, y] of points) {
            const dist = x * x + y * y;
            heap.push([dist, x, y]);
        }

        const res = [];
        for (let i = 0; i < k; i++) {
            const [_, x, y] = heap.dequeue();
            res.push([x, y]);
        }
        return res;
    }
}
