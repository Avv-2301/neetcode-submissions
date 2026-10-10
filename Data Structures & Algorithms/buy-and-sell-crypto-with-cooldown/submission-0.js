class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let hold = -prices[0];
        let sold = 0;
        let rest = 0;

        for (let i = 1; i < prices.length; i++) {
            const prevHold = hold;
            const prevSold = sold;

            hold = Math.max(hold, rest - prices[i]);
            sold = prevHold + prices[i];
            rest = Math.max(rest, prevSold);
        }

        return Math.max(sold, rest);
    }
}
