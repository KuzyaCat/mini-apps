// You are given two binary trees root1 and root2.
// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
// You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap,
// then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.
// Return the merged tree.
// O(V) - time
// O(V) - space
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (!root1 && !root2) {
        return null;
    }
    const val1 = root1 ? root1.val : 0;
    const val2 = root2 ? root2.val : 0;
    const newRoot = new TreeNode(val1 + val2);
    newRoot.left = mergeTrees(root1?.left, root2?.left);
    newRoot.right = mergeTrees(root1?.right, root2?.right);
    return newRoot;
};

