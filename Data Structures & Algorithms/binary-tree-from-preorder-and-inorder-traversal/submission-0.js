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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let preIndx = 0;
        let inIndx = 0;

        function dfs(limit) {
            if (preIndx >= preorder.length) return null;
            if (inorder[inIndx] === limit) {
                inIndx++;
                return null;
            }

            let root = new TreeNode(preorder[preIndx++]);
            root.left = dfs(root.val);
            root.right = dfs(limit);
            return root;
        }
        return dfs(Infinity);
    }
}
