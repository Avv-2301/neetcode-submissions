class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let heap = new PriorityQueue((a, b) => b[0] - a[0]);

        for (const [x, y] of points) {
            let dist = x * x + y * y;
            heap.push([dist, x, y]);
            if (heap.size() > k) {
                heap.pop();
            }
        }

        const res = [];
        while (heap.size() > 0) {
            const [dist, x, y] = heap.pop();
            res.push([x, y]);
        }
        return res;
    }
}
