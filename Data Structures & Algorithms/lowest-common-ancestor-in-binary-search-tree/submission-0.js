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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (root === null) {
            return null;
        }
        if (root.val === p.val || root.val === q.val) return root;
        let leftLCA = this.lowestCommonAncestor(root.left, p, q);
        let rightLCA = this.lowestCommonAncestor(root.right, p, q);
        if (leftLCA && rightLCA) {
            return root;
        } else if (leftLCA !== null) {
            return leftLCA;
        } else return rightLCA;
    }
}
