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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (!root) return root;

        let parent = null;
        let cur = root;

        while (cur && cur.val !== key) {
            parent = cur;
            if (key > cur.val) {
                cur = cur.right;
            } else {
                cur = cur.left;
            }
        }

        if (!cur) return root;

        if (!cur.left || !cur.right) {
            const child = cur.left || cur.right;
            if (!parent) return child;
            if (parent.left === cur) {
                parent.left = child;
            } else {
                parent.right = child;
            }
        } else {
            let par = null;
            const delNode = cur;
            cur = cur.right;
            while (cur.left) {
                par = cur;
                cur = cur.left;
            }

            if (par) {
                par.left = cur.right;
                cur.right = delNode.right;
            }
            cur.left = delNode.left;

            if (!parent) return cur;

            if (parent.left === delNode) {
                parent.left = cur;
            } else {
                parent.right = cur;
            }
        }
        return root;
    }
}
