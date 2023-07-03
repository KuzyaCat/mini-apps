// Given the root of a binary tree, return all root-to-leaf paths in any order.
// O(V) - time
// O(h) or O(V) - space
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) {
    return [];
  }
  const paths = [];
  dfs(root, '', paths);
  return paths;
};

function dfs(root, currentPath, paths) {
  if (!root) {
    return;
  }
  if (!root.left && !root.right) {
    paths.push(currentPath + root.val);
    return;
  }
  dfs(root.left, currentPath + root.val + '->', paths);
  dfs(root.right, currentPath + root.val + '->', paths);
}
