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
     * @return {boolean}
     */
    flag = true;
    height(root) {
        if (root === null) return 0;
        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);
        if (Math.abs(leftHeight - rightHeight) > 1) {
            this.flag = false;
        }
        return 1 + Math.max(leftHeight, rightHeight);
    }
    isBalanced(root) {
        this.flag = true;
        this.height(root);
        return this.flag;
    }
}
