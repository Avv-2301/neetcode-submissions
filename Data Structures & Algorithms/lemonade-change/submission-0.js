class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let fiveBill = 0;
        let tenBill = 0;

        for (const bill of bills) {
            if (bill === 5) {
                fiveBill++;
            } else if (bill === 10) {
                if (fiveBill > 0) {
                    fiveBill--;
                    tenBill++;
                } else {
                    return false;
                }
            } else {
                if (fiveBill > 0 && tenBill > 0) {
                    fiveBill--;
                    tenBill--;
                } else {
                    if (fiveBill >= 3) {
                        fiveBill -= 3;
                    } else {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
