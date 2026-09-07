class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let preMap = new Map();
        for (let [course, pre] of prerequisites) {
            if (!preMap.has(course)) {
                preMap.set(course, []);
            }
            preMap.get(course).push(pre);
        }
        let output = [];
        let visit = new Set();
        let cycle = new Set();

        for (let c = 0; c < numCourses; c++) {
            if (!this.dfs(c, preMap, visit, cycle, output)) {
                return [];
            }
        }
        return output;
    }

    dfs(c, preMap, visit, cycle, output) {
        if (cycle.has(c)) {
            return false;
        }

        if (visit.has(c)) {
            return true;
        }

        cycle.add(c);
        for (const pre of preMap.get(c) || []) {
            if (!this.dfs(pre, preMap, visit, cycle, output)) {
                return false;
            }
        }
        cycle.delete(c);
        visit.add(c);
        output.push(c);
        return true;
    }
}
