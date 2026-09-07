/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let gropuPrev = dummy;

        while (true) {
            const kth = this.getKth(gropuPrev, k);
            if (!kth) break;

            const groupNext = kth.next;
            let prev = kth.next;
            let curr = gropuPrev.next;

            while (curr !== groupNext) {
                const temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }
            const tmp = gropuPrev.next;
            gropuPrev.next = kth;
            gropuPrev = tmp;
        }
        return dummy.next;
    }

    getKth(curr, k) {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    }
}
