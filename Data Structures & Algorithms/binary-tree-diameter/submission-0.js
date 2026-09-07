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

    height(root) {
        if (root === null) return 0;
        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    diameterOfBinaryTree(root) {
        if (root === null) return 0;
        let leftHeight = this.diameterOfBinaryTree(root.left);
        let rightHeight = this.diameterOfBinaryTree(root.right);
        let currDiameter = this.height(root.left) + this.height(root.right);
        return Math.max(currDiameter, Math.max(leftHeight, rightHeight));
    }
}
