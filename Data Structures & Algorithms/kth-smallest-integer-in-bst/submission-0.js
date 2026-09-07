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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;
        function dfs(root) {
            if (root === null) return null;
            let left = dfs(root.left);
            if (left !== null) return left;
            count++;
            if (count === k) {
                return root.val;
            }
            return dfs(root.right);
        }
        return dfs(root);
    }
}
