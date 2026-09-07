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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let nodes = [];
        for (let lst of lists) {
            while (lst) {
                nodes.push(lst.val);
                lst = lst.next;
            }
        }
        nodes.sort((a, b) => a - b);

        let dummy = new ListNode(0);
        let temp = dummy;

        for (let node of nodes) {
            temp.next = new ListNode(node);
            temp = temp.next;
        }
        return dummy.next;
    }
}
