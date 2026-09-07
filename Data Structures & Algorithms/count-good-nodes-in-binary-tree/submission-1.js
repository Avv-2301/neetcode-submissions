/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        function countGoodNodes(node, maxSoFar) {
            if (!node) return 0;
            let count = 0;

            if (node.val >= maxSoFar) {
                count += 1;
            }
            const nextMax = Math.max(maxSoFar, node.val);

            count += countGoodNodes(node.left, nextMax);
            count += countGoodNodes(node.right, nextMax);

            return count;
        }
        return countGoodNodes(root, -Infinity);
    }
}
