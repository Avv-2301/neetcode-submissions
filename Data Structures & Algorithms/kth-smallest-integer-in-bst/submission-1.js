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
        let ans;
        function dfs(root) {
            if (root === null) return false;
            if (dfs(root.left)) return true;
            k--;
            if (k === 0) {
                ans = root.val;
                return true;
            }
            dfs(root.right);
            return false;
        }
        dfs(root);
        return ans;
    }
}
