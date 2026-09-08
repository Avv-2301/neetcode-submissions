class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let heap = new MaxPriorityQueue();

        for (const [x, y] of points) {
            let dist = x * x + y * y;
            heap.push([dist, x, y]);
            if (heap.size() > k) {
                heap.pop();
            }
        }

        const res = [];
        while(heap.size() > 0){
            let tmp = heap.pop();
            res.push([tmp[1], tmp[2]])
        }
        return res;
    }
}
