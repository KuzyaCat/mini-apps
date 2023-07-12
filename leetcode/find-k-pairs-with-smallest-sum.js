// You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.
// Define a pair (u, v) which consists of one element from the first array and one element from the second array.
// Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    if (!nums1.length || !nums2.length) return [];
  
    const minHeap = new MinPriorityQueue({ priority: ([sum]) => sum });
    const result = [];

    for (let i = 0; i < nums1.length; i++) {
        minHeap.enqueue([nums1[i] + nums2[0], i, 0]);
    }

    while (k > 0 && !minHeap.isEmpty()) {
        const { element: [_, i, j] } = minHeap.dequeue(); 
        result.push([nums1[i], nums2[j]]);

        if (j + 1 < nums2.length) {
        minHeap.enqueue([nums1[i] + nums2[j+1], i, j+1]);
        }

        k--;
    }

    return result
};
