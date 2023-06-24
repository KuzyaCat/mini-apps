// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root || (!root.left && !root.right)) {
        return 0;
    }

    let diameter = 0;
    
    const heightDFS = (node) => {
        if (!node) {
            return 0;
        }
        const left = heightDFS(node.left);
        const right = heightDFS(node.right);
        diameter = Math.max(diameter, left + right);
        return Math.max(left, right) + 1;
    }

    heightDFS(root);
    return diameter;
};
