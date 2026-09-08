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
    maxPathSum(root) {
        let maxi = -Infinity;
        function dfs(root) {
            if (!root) return 0;
            let leftSum = Math.max(0, dfs(root.left));
            let rightSum = Math.max(0, dfs(root.right));
            maxi = Math.max(maxi, leftSum + rightSum + root.val);
            return root.val + leftSum + rightSum;
        }
        dfs(root);
        return maxi;
    }
}
