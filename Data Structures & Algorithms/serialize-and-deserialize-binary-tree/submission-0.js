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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return "";
        let result = "";
        const q = [root];

        while (q.length > 0) {
            const node = q.shift();
            if (!node) {
                result += "#,";
            } else {
                result += node.val + ",";
                q.push(node.left);
                q.push(node.right);
            }
        }
        return result;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (!data) return null;

        let nodes = data.split(",");
        nodes.pop();
        let root = new TreeNode(parseInt(nodes[0]));
        let queue = [root];
        let i = 1;

        while (queue.length > 0 && i < nodes.length - 1) {
            let current = queue.shift();

            if (nodes[i] !== "#") {
                let left = new TreeNode(parseInt(nodes[i]));
                current.left = left;
                queue.push(left);
            }
            i++;

            if (nodes[i] !== "#") {
                let right = new TreeNode(parseInt(nodes[i]));
                current.right = right;
                queue.push(right);
            }
            i++;
        }
        return root;
    }
}
