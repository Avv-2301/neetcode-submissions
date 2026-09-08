class MedianFinder {
    constructor() {
        this.nums = [];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.nums.push(num);
    }

    /**
     * @return {number}
     */
    findMedian() {
        this.nums.sort((a, b) => a - b);
        const n = this.nums.length;
        if (n % 2 === 1) {
            return this.nums[Math.floor(n / 2)];
        }
        return (this.nums[n / 2 - 1] + this.nums[n / 2]) / 2.0;
    }
}
