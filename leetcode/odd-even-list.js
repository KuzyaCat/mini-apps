// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head || !head.next) return head;

    let tail = head;
    let head2 = head.next;
    let tail2 = head2;
    let current = tail2.next;
    let isOdd = true;

    while (current) {
        if (isOdd) {
            tail.next = current;
            tail = current;
        } else {
            tail2.next = current;
            tail2 = current;
        }

        isOdd = !isOdd;
        current = current.next;
    }

    tail.next = head2;
    tail2.next = null;
    return head;
};
