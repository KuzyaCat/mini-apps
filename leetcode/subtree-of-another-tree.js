// Given the roots of two binary trees root and subRoot,
// return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// O(V1*V2) - time
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  if (!root) {
    return false;
  }
  if (root.val === subRoot.val && areEqual(root, subRoot)) {
    return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function areEqual(root, subRoot) {
  if (!root || !subRoot) {
    return !root && !subRoot;
  }
  if (root.val !== subRoot.val) {
    return false;
  }
  return areEqual(root.left, subRoot.left) && areEqual(root.right, subRoot.right);
}
