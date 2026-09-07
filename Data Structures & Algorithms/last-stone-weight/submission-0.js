class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxQueue = new MaxPriorityQueue();

        for (const num of stones) {
            maxQueue.enqueue(num);
        }

        while (maxQueue.size() > 1) {
            let stone1 = maxQueue.dequeue();
            let stone2 = maxQueue.dequeue();

            if (stone1 !== stone2) {
                maxQueue.enqueue(stone1 - stone2);
            }
        }
        return maxQueue.size() === 1 ? maxQueue.dequeue() : 0;
    }
}
