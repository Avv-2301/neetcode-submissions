class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let slow = n;
        let fast = n;
        do {
            slow = this.sumOfSquares(slow);
            fast = this.sumOfSquares(this.sumOfSquares(fast));
        } while (slow !== fast);
        return slow === 1;
    }

    sumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            let lastDigit = num % 10;
            sum += lastDigit * lastDigit;
            num = Math.floor(num / 10);
        }
        return sum;
    }
}
