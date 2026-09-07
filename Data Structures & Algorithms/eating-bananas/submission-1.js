class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 0;
        let high = Math.max(...piles);
        let res = 0;

        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);

            let totalTime = 0;
            for (let pile of piles) {
                totalTime += Math.ceil(pile / mid);
            }

            if (totalTime <= h) {
                res = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return res;
    }
}
