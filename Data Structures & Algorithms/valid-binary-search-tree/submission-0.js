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
    isValidBST(root) {
        function valid(root, min, max) {
            if (!root) return true;
            if (root.val <= min || root.val >= max) {
                return false;
            }
            return valid(root.left, min, root.val) && valid(root.right, root.val, max);
        }
        return valid(root, -Infinity, Infinity);
    }
}
