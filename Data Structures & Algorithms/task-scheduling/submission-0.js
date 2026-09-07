class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let map = new Map();
        for (let task of tasks) {
            map.set(task, (map.get(task) || 0) + 1);
        }

        let maxHeap = Array.from(map.values());
        maxHeap.sort((a, b) => b - a);

        let time = 0;

        while (maxHeap.length > 0) {
            let temp = [];
            let cycle = n + 1;
            let i = 0;
            while (i < cycle && maxHeap.length > 0) {
                let count = maxHeap.shift();
                count--;
                if (count > 0) {
                    temp.push(count);
                }
                time++;
                i++;
            }
            maxHeap = maxHeap.concat(temp);
            maxHeap.sort((a, b) => b - a);
            if (maxHeap.length > 0) {
                time += cycle - i;
            }
        }
        return time;
    }
}
