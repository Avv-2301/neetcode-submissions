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
    ans = 0;
    height(root) {
        if (root === null) return 0;
        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);
        this.ans = Math.max(this.ans, leftHeight + rightHeight);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    diameterOfBinaryTree(root) {
        this.height(root);
        return this.ans;
    }
}
