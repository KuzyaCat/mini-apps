// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array.
// Answers within 10-5 of the actual answer will be accepted.
// O(V) - time
// O(2N) - space
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const queue = [root];
    const averages = [];
    while (queue.length) {
        const queueLength = queue.length;
        let rowSum = 0;
        for (let i = 0; i < queueLength; i += 1) {
            const current = queue.shift();
            rowSum += current.val;
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        averages.push(rowSum / queueLength);
    }
    return averages;
};
